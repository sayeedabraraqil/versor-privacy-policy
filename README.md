# Versor Privacy Policy & Legal Pages

Static GitHub Pages site for the Versor Android app (`com.versor`). It contains:

- `index.html` — legal landing page
- `privacy.html` — app-specific privacy policy
- `terms.html` — terms of service
- `delete-account.html` — account deletion instructions and external request route
- `styles.css`, `site.js`, `site-config.js` — shared styles and configuration

## Required before public release

1. Open `site-config.js`.
2. Set `privacyContactEmail` to a real, monitored mailbox that the Versor developer controls and will use for privacy and account-deletion requests. Do not use an unmonitored or invented address.
3. Confirm the developer/app identity shown in the Google Play listing is accurately represented by the Versor name in these pages.
4. Re-read every policy statement against the exact release build, enabled SDKs, Firebase/Appwrite deployment settings, and Play Console Data safety declarations. If any feature or SDK changes, update the policy and Data safety form together.
5. Verify the external deletion request email can be received and that requests are actually processed. The page's form opens an email application; it does not transmit a request to a server by itself.

The source review found that the account-deletion implementation retains limited security/billing audit records. The policy discloses these records, including that the current implementation does not set a fixed automatic expiry. Review that retention design and applicable legal requirements before publication.

## Publish with GitHub Pages

1. Create a **public** GitHub repository named `versor-privacy-policy`.
2. Upload the contents of this folder to the repository root (not the enclosing folder).
3. In the repository, open **Settings → Pages**.
4. Choose **Deploy from a branch**, select `main` and `/ (root)`, then save.
5. Wait for GitHub Pages to publish the site. Confirm all four URLs load in a private browser window without sign-in:
   - `/`
   - `/privacy.html`
   - `/terms.html`
   - `/delete-account.html`
6. Confirm the contact email works and the deletion request form opens a correctly addressed, prefilled email.
7. Only then update the Android app's string resources and Play Console URLs to the published URLs.

Typical project-site URL format:

`https://<github-username>.github.io/versor-privacy-policy/`

The pages use relative links so they work under the GitHub Pages repository path.

## Important implementation notes

- No analytics, tracking pixels, web fonts, cookies, or third-party JavaScript are added to this static site.
- The deletion form uses `mailto:`. It requires the user to send the prepared email and requires the developer to monitor and process the mailbox. It is not an automated backend form.
- The privacy policy describes the project source inspected for this draft, not an independently audited production environment. Validate it against the actual release variant and active service configuration before submission.
