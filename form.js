/*
 * 2027 sign-up form (parent/guardian contact details only).
 *
 * Right now nothing is sent anywhere: on submit we stop the browser from
 * sending the form and show "This form isn't connected yet."
 *
 * TO CONNECT LATER: set CONFIG.enabled = true and implement sendSubmission()
 * below (for example a fetch() POST to your own backend, or a POST to a
 * Google Form's /formResponse URL with its entry IDs). Keep the field
 * `name` attributes in 2027.html in sync with whatever the backend expects.
 */
(function () {
  var CONFIG = {
    enabled: false,   // keep false until a real, privacy-reviewed destination exists
    endpoint: ""      // e.g. "https://example.org/api/signup" (placeholder)
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
    return Promise.reject(new Error("Not connected"));
  }

  // Native validation runs first: the submit event only fires when every
  // required field is filled in and the email/phone fields look valid.
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (!CONFIG.enabled) {
      show("This form isn't connected yet.", "info");
      return;
    }
    sendSubmission(new FormData(form))
      .then(function () { form.reset(); show("Thank you! We'll be in touch soon.", "ok"); })
      .catch(function () { show("Sorry, something went wrong. Please try again later.", "err"); });
  });
})();
