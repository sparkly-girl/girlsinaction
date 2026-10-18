/*
 * 2027 sign-up form (parent/guardian contact details only).
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

  var form = document.getElementById("signup-form");
  var status = document.getElementById("form-status");
  if (!form || !status) return;

  function show(msg, kind) {
    status.textContent = msg;
    status.className = "form-status show" + (kind ? " " + kind : "");
  }

  // HOOK: replace the body of this function to send the data somewhere.
  // `data` is a FormData object with all field values. Return a Promise.
  function sendSubmission(data) {
    data.append("_subject", "New Technovation in Fremont 2027 sign-up");
    data.append("_template", "table");
    data.append("_captcha", "false");
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

  // Native validation runs first: the submit event only fires when every
  // required field is filled in and the email/phone fields look valid.
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (form.elements["_honey"] && form.elements["_honey"].value) return; // spam bot
    if (!CONFIG.enabled) {
      show("This form isn't connected yet.", "info");
      return;
    }
    show("Sending...", "info");
    sendSubmission(new FormData(form))
      .then(function () { form.reset(); show("Thank you! We'll be in touch soon.", "ok"); })
      .catch(function () { show("Sorry, something went wrong. Please try again later.", "err"); });
  });
})();
