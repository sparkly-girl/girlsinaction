/*
 * Sign-up forms (Technovation page: parent sign-up and mentor sign-up).
 *
 * Every <form class="js-formsubmit"> on a page is handled here. Each form:
 *   - data-subject="..."  the email subject. This attribute is the single
 *                         source of truth: the hidden _subject input in the
 *                         HTML is kept in sync with it before each send.
 *   - data-success="..."  optional thank-you message for that form.
 *   - data-error="..."    optional error message for that form.
 *   - its own .form-status element (role="status") for messages.
 *   - a hidden _honey input (spam honeypot; leave it empty).
 *
 * Submissions are emailed via FormSubmit (https://formsubmit.co), a free
 * form-to-email service for static sites. Change CONFIG.endpoint to send
 * them to a different inbox (FormSubmit asks the new inbox to confirm once).
 * The endpoint uses FormSubmit's private alias so the inbox address stays hidden.
 */
(function () {
  var CONFIG = {
    enabled: true,
    endpoint: "https://formsubmit.co/ajax/fae84588433b5704a324c91f0819f66a"
  };
  var DEFAULT_OK = "Thank you! We'll be in touch soon.";
  var DEFAULT_ERR = "Sorry, something went wrong. Please try again later.";

  // Make sure the hidden _subject input exists and matches data-subject.
  function syncSubject(form) {
    var subject = form.getAttribute("data-subject");
    if (!subject) return;
    var input = form.querySelector('input[name="_subject"]');
    if (!input) {
      input = document.createElement("input");
      input.type = "hidden";
      input.name = "_subject";
      form.insertBefore(input, form.firstChild);
    }
    input.value = subject;
  }

  function sendSubmission(data) {
    data.set("_template", "table");
    data.set("_captcha", "false");
    return fetch(CONFIG.endpoint, {
      method: "POST",
      headers: { "Accept": "application/json" },
      body: data
    }).then(function (r) {
      if (!r.ok) throw new Error("HTTP " + r.status);
      return r.json();
    }).then(function (j) {
      if (j && (j.success === false || j.success === "false")) throw new Error(j.message || "Failed");
      return j;
    });
  }

  function setup(form) {
    var status = form.querySelector(".form-status[role='status']") || form.querySelector(".form-status");
    if (!status) return;
    syncSubject(form);

    function show(msg, kind) {
      status.textContent = msg;
      status.className = "form-status show" + (kind ? " " + kind : "");
    }

    var busy = false;
    // Native validation runs first: the submit event only fires when every
    // required field is filled in and the email/phone fields look valid.
    form.addEventListener("submit", function (e) {
      e.preventDefault();
      if (busy) return;
      if (form.elements["_honey"] && form.elements["_honey"].value) return; // spam bot
      if (!CONFIG.enabled) {
        show("This form isn't connected yet.", "info");
        return;
      }
      syncSubject(form);
      var button = form.querySelector('[type="submit"]');
      busy = true;
      if (button) button.disabled = true;
      show("Sending...", "info");
      sendSubmission(new FormData(form))
        .then(function () {
          form.reset();
          syncSubject(form);
          show(form.getAttribute("data-success") || DEFAULT_OK, "ok");
        })
        .catch(function () { show(form.getAttribute("data-error") || DEFAULT_ERR, "err"); })
        .then(function () { busy = false; if (button) button.disabled = false; });
    });
  }

  var forms = document.querySelectorAll("form.js-formsubmit");
  for (var i = 0; i < forms.length; i++) setup(forms[i]);
})();
