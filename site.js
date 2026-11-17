(function () {
  "use strict";
  const config = window.VERSOR_SITE_CONFIG || {};
  const email = String(config.privacyContactEmail || "").trim();
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

  document.querySelectorAll("[data-contact-email]").forEach((node) => {
    if (emailIsValid) {
      node.textContent = email;
      if (node.tagName.toLowerCase() === "a") node.href = `mailto:${email}`;
    } else {
      node.textContent = "Privacy contact email not configured";
      if (node.tagName.toLowerCase() === "a") {
        node.removeAttribute("href");
        node.setAttribute("aria-disabled", "true");
      }
    }
  });

  document.querySelectorAll("[data-contact-required]").forEach((node) => {
    node.classList.toggle("hidden", emailIsValid);
  });
  document.querySelectorAll("[data-contact-ready]").forEach((node) => {
    node.classList.toggle("hidden", !emailIsValid);
  });

  const form = document.getElementById("deletionRequestForm");
  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      if (!emailIsValid) {
        const status = document.getElementById("formStatus");
        if (status) status.textContent = "The privacy contact email has not been configured. Please try again later.";
        return;
      }
      if (!form.reportValidity()) return;
      const registeredEmail = document.getElementById("registeredEmail").value.trim();
      const signInMethod = document.getElementById("signInMethod").value;
      const details = document.getElementById("requestDetails").value.trim();
      const subject = encodeURIComponent("Versor account and data deletion request");
      const body = encodeURIComponent(
        "I request deletion of the Versor account associated with this email address and its associated account data.\n\n" +
        `Registered account email: ${registeredEmail}\n` +
        `Sign-in method: ${signInMethod}\n` +
        (details ? `Additional details: ${details}\n` : "") +
        "\nI understand that Versor may need to verify account ownership before processing this request. I have not included and will not send my password, authentication token, or payment credentials."
      );
      window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
      const status = document.getElementById("formStatus");
      if (status) status.textContent = "Your email application should open with a prepared request. You must send the email to submit the request.";
    });
  }

  const year = document.getElementById("currentYear");
  if (year) year.textContent = String(new Date().getFullYear());
})();
