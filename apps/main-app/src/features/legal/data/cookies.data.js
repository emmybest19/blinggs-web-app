/**
 * Blingg Cookies Policy, as a document descriptor.
 *
 * Rendered by LegalDocument — see ./terms.data.js for the block-type contract.
 * This document introduces two block types the other policies do not use:
 * `flow` (§10's authentication sequence) and `table` (§21's summary grid).
 *
 * Source note: §21 arrived as a table whose column boundaries had been lost in
 * copying ("Cookie TypePurposeUsually Required?Necessary…"). It is reconstructed
 * below as the 3-column, 7-row grid it plainly was. Worth a glance to confirm
 * the rows landed the way you meant them.
 */
export const cookiesPolicy = {
  slug: 'cookies-policy',
  title: `Cookies Policy`,
  subtitle: `How Blingg uses cookies and similar technologies, and the control you have over them.`,
  effectiveDate: `05/09/2026`,
  lastUpdated: `05/09/2026`,
  intro: [
    `This Cookies Policy explains how Zeta Technology Limited, the operator of Blingg, uses cookies and similar technologies when you visit or use our website, web services, and other online services.`,
    `This policy should be read together with the Blingg Privacy Policy and Blingg Terms of Service.`,
  ],
  sections: [
    {
      id: 'what-are-cookies',
      title: `What Are Cookies?`,
      blocks: [
        { type: 'p', text: `Cookies are small text files placed on your device when you visit a website.` },
        { type: 'p', text: `They allow a website to remember information about your visit and can help with:` },
        {
          type: 'list',
          items: [
            `Authentication.`,
            `Security.`,
            `Preferences.`,
            `Website functionality.`,
            `Performance.`,
            `Analytics.`,
            `Personalization.`,
          ],
        },
        { type: 'p', text: `We may also use technologies similar to cookies, including pixels, SDKs, local storage, session identifiers, and similar technologies.` },
      ],
    },
    {
      id: 'why-blingg-uses-cookies',
      title: `Why Blingg Uses Cookies`,
      blocks: [
        { type: 'p', text: `We may use cookies and similar technologies to:` },
        {
          type: 'list',
          items: [
            `Keep you signed in.`,
            `Protect your account.`,
            `Detect suspicious activity.`,
            `Remember your preferences.`,
            `Maintain website functionality.`,
            `Understand how users interact with our website.`,
            `Improve performance.`,
            `Diagnose technical problems.`,
            `Measure the effectiveness of our services.`,
            `Support marketing where permitted.`,
          ],
        },
      ],
    },
    {
      id: 'types-of-cookies-we-use',
      title: `Types of Cookies We Use`,
      blocks: [
        { type: 'p', text: `We generally classify cookies into the following categories.` },
        { type: 'subheading', text: `A. Strictly Necessary Cookies` },
        { type: 'p', text: `These cookies are required for the website or service to function.` },
        { type: 'p', text: `They may be used for:` },
        {
          type: 'list',
          items: [
            `Login sessions.`,
            `Authentication.`,
            `Security.`,
            `Session management.`,
            `Fraud prevention.`,
            `Load balancing.`,
            `Maintaining essential settings.`,
          ],
        },
        { type: 'p', text: `Because these cookies are necessary for the operation and security of the service, they generally cannot be disabled through our cookie preference system.` },
      ],
    },
    {
      id: 'security-cookies',
      title: `Security Cookies`,
      blocks: [
        { type: 'p', text: `Security-related cookies help protect Blingg and its users.` },
        { type: 'p', text: `They may help us:` },
        {
          type: 'list',
          items: [
            `Detect abnormal activity.`,
            `Prevent unauthorized access.`,
            `Detect automated abuse.`,
            `Protect authentication sessions.`,
            `Prevent certain types of attacks.`,
            `Maintain secure sessions.`,
          ],
        },
        { type: 'p', text: `For a platform handling communication and financial activity, these technologies are an important part of our security architecture.` },
      ],
    },
    {
      id: 'functional-cookies',
      title: `Functional Cookies`,
      blocks: [
        { type: 'p', text: `Functional cookies allow Blingg to remember choices you make.` },
        { type: 'p', text: `For example:` },
        {
          type: 'list',
          items: [
            `Language preference.`,
            `Display preferences.`,
            `Region.`,
            `Session preferences.`,
            `Other settings.`,
          ],
        },
        { type: 'p', text: `These technologies help provide a more convenient experience.` },
      ],
    },
    {
      id: 'analytics-cookies',
      title: `Analytics Cookies`,
      blocks: [
        { type: 'p', text: `Where permitted, we may use analytics technologies to understand how people use our website.` },
        { type: 'p', text: `Analytics information may include:` },
        {
          type: 'list',
          items: [
            `Pages visited.`,
            `Features used.`,
            `Time spent on pages.`,
            `Navigation patterns.`,
            `Browser information.`,
            `Device information.`,
            `General geographic information.`,
            `Error and performance information.`,
          ],
        },
        { type: 'p', text: `We use this information to improve Blingg rather than to identify individual users unnecessarily.` },
        { type: 'p', text: `Where appropriate, analytics information may be aggregated or de-identified.` },
      ],
    },
    {
      id: 'marketing-and-advertising-technologies',
      title: `Marketing and Advertising Technologies`,
      blocks: [
        { type: 'p', text: `Where permitted by law and subject to applicable consent requirements, Blingg may use cookies or similar technologies to:` },
        {
          type: 'list',
          items: [
            `Measure advertising campaigns.`,
            `Understand marketing performance.`,
            `Deliver relevant advertising.`,
            `Measure conversions.`,
            `Prevent advertising fraud.`,
          ],
        },
        { type: 'p', text: `We will seek consent where applicable before placing non-essential advertising technologies.` },
      ],
    },
    {
      id: 'third-party-cookies',
      title: `Third-Party Cookies`,
      blocks: [
        { type: 'p', text: `Some technologies used on our website may be provided by third-party service providers.` },
        { type: 'p', text: `These may include providers supporting:` },
        {
          type: 'list',
          items: [
            `Analytics.`,
            `Security.`,
            `Payment services.`,
            `Customer support.`,
            `Infrastructure.`,
            `Advertising.`,
            `Performance monitoring.`,
          ],
        },
        { type: 'p', text: `Third-party providers may process information according to their own privacy policies and contractual obligations.` },
        { type: 'p', text: `Where required, Blingg will seek appropriate consent before enabling non-essential third-party technologies.` },
      ],
    },
    {
      id: 'payment-services',
      title: `Payment Services`,
      blocks: [
        { type: 'p', text: `When you use Blingg's payment services, payment or financial partners may use their own technologies to provide, secure, authenticate, or process transactions.` },
        { type: 'p', text: `These technologies may be governed by the relevant provider's privacy and cookie policies.` },
        { type: 'p', text: `Blingg does not use cookies to collect your:` },
        {
          type: 'list',
          items: [
            `Banking password.`,
            `ATM PIN.`,
            `Blingg transaction PIN.`,
            `OTP.`,
            `Private authentication credentials.`,
          ],
        },
        { type: 'note', text: `Users should never provide these credentials through an unofficial website or communication channel.` },
      ],
    },
    {
      id: 'login-and-authentication',
      title: `Login and Authentication`,
      blocks: [
        { type: 'p', text: `Blingg may use cookies or similar technologies to maintain secure authentication sessions.` },
        { type: 'p', text: `For example:` },
        {
          type: 'flow',
          steps: [
            `Login`,
            `Secure session created`,
            `Authentication maintained`,
            `Session expires`,
          ],
        },
        { type: 'p', text: `Authentication information should be protected using appropriate security mechanisms.` },
        { type: 'p', text: `Session cookies should not contain unnecessary personal information.` },
      ],
    },
    {
      id: 'cookie-security',
      title: `Cookie Security`,
      blocks: [
        { type: 'p', text: `Where cookies are used for authentication or sensitive functionality, Blingg will seek to apply appropriate security controls such as:` },
        {
          type: 'list',
          items: [
            `Secure cookie attributes.`,
            `HttpOnly where appropriate.`,
            `SameSite controls.`,
            `Encryption in transit.`,
            `Session expiration.`,
            `Appropriate access controls.`,
          ],
        },
        { type: 'p', text: `These measures help reduce risks such as session theft and cross-site attacks.` },
      ],
    },
    {
      id: 'how-long-cookies-last',
      title: `How Long Cookies Last`,
      blocks: [
        { type: 'p', text: `Cookies may be:` },
        { type: 'subheading', text: `Session Cookies` },
        { type: 'p', text: `These expire when you close your browser or when the session ends.` },
        { type: 'subheading', text: `Persistent Cookies` },
        { type: 'p', text: `These remain on your device for a defined period or until you delete them.` },
        { type: 'p', text: `The retention period depends on the purpose of the cookie.` },
        { type: 'p', text: `Blingg will seek to avoid retaining cookies for longer than reasonably necessary for their purpose.` },
      ],
    },
    {
      id: 'your-cookie-choices',
      title: `Your Cookie Choices`,
      blocks: [
        { type: 'p', text: `When you visit the Blingg website, you may be presented with a cookie preference mechanism where applicable.` },
        { type: 'p', text: `You may be able to:` },
        { type: 'subheading', text: `Accept All` },
        { type: 'p', text: `Allow necessary, functional, analytics and other permitted technologies.` },
        { type: 'subheading', text: `Reject Non-Essential` },
        { type: 'p', text: `Allow only technologies required for the website to operate.` },
        { type: 'subheading', text: `Manage Preferences` },
        { type: 'p', text: `Choose which optional categories you allow.` },
        { type: 'p', text: `Your choices may be stored so that we do not repeatedly ask you for the same preference.` },
      ],
    },
    {
      id: 'changing-your-cookie-settings',
      title: `Changing Your Cookie Settings`,
      blocks: [
        { type: 'p', text: `You can also control cookies through your browser.` },
        { type: 'p', text: `Most browsers allow you to:` },
        {
          type: 'list',
          items: [
            `View cookies.`,
            `Delete cookies.`,
            `Block cookies.`,
            `Block third-party cookies.`,
            `Allow cookies from selected websites.`,
          ],
        },
        { type: 'p', text: `However, disabling necessary cookies may cause certain Blingg features to stop working correctly.` },
        { type: 'p', text: `For example:` },
        {
          type: 'list',
          items: [
            `If authentication cookies are disabled, you may be unable to remain signed in.`,
          ],
        },
      ],
    },
    {
      id: 'mobile-applications',
      title: `Mobile Applications`,
      blocks: [
        { type: 'p', text: `The Blingg mobile application may not use traditional browser cookies in the same way as our website.` },
        { type: 'p', text: `Instead, the application may use technologies such as:` },
        {
          type: 'list',
          items: [
            `Device identifiers.`,
            `Local storage.`,
            `SDKs.`,
            `Session tokens.`,
            `Secure storage.`,
            `Analytics technologies.`,
          ],
        },
        { type: 'p', text: `These technologies may perform similar functions to cookies.` },
        { type: 'p', text: `Our Privacy Policy explains how information collected through the Blingg application is handled.` },
      ],
    },
    {
      id: 'cookies-and-personal-information',
      title: `Cookies and Personal Information`,
      blocks: [
        { type: 'p', text: `A cookie does not automatically identify you by name.` },
        { type: 'p', text: `However, information associated with cookies may sometimes be linked to an account, device, or other personal information.` },
        { type: 'p', text: `Where this occurs, the information will be handled in accordance with the Blingg Privacy Policy and applicable data-protection law.` },
      ],
    },
    {
      id: 'data-protection',
      title: `Data Protection`,
      blocks: [
        { type: 'p', text: `Blingg seeks to comply with applicable Nigerian data-protection requirements, including the Nigeria Data Protection Act 2023 (NDPA).` },
        { type: 'p', text: `Where cookies or similar technologies involve personal information, Blingg seeks to apply appropriate principles including:` },
        {
          type: 'list',
          items: [
            `Transparency.`,
            `Purpose limitation.`,
            `Data minimization.`,
            `Security.`,
            `Appropriate retention.`,
            `User control.`,
          ],
        },
        { type: 'p', text: `Where consent is required for non-essential cookies, we will seek consent before activating those technologies.` },
      ],
    },
    {
      id: 'do-not-track',
      title: `Do Not Track`,
      blocks: [
        { type: 'p', text: `Some browsers provide "Do Not Track" or similar signals.` },
        { type: 'p', text: `Because there is currently no universal technical standard for interpreting every such signal consistently, Blingg may not respond to every browser-generated signal in the same manner.` },
        { type: 'p', text: `We will continue to review applicable standards and legal requirements.` },
      ],
    },
    {
      id: 'updates-to-this-cookies-policy',
      title: `Updates to This Cookies Policy`,
      blocks: [
        { type: 'p', text: `We may update this Cookies Policy when:` },
        {
          type: 'list',
          items: [
            `Our technology changes.`,
            `We introduce new services.`,
            `Our use of cookies changes.`,
            `Legal or regulatory requirements change.`,
          ],
        },
        // Source split this across two lines ("…the applicable:" / "\"Last
        // Updated\" date."); rejoined into the single sentence it is.
        { type: 'p', text: `The latest version will always contain the applicable "Last Updated" date.` },
      ],
    },
    {
      id: 'contact-us',
      title: `Contact Us`,
      blocks: [
        { type: 'p', text: `If you have questions about this Cookies Policy or how Blingg uses cookies, contact:` },
        {
          type: 'contact',
          entries: [
            { label: `Company`, value: `Zeta Technology Limited` },
            { label: `Product`, value: `Blingg` },
            { label: `Privacy Email`, value: `legal@blinggapp.com`, href: `mailto:legal@blinggapp.com` },
            { label: `Support Email`, value: `hello@blinggapp.com`, href: `mailto:hello@blinggapp.com` },
            { label: `Registered Address`, value: `No.14 Diamond Street Calabar Nigeria` },
          ],
        },
      ],
    },
    {
      id: 'quick-cookie-summary',
      title: `Quick Cookie Summary`,
      blocks: [
        {
          type: 'table',
          columns: [`Cookie Type`, `Purpose`, `Usually Required?`],
          rows: [
            [`Necessary`, `Website functionality`, `Yes`],
            [`Authentication`, `Secure login/session`, `Yes`],
            [`Security`, `Fraud & attack prevention`, `Yes`],
            [`Functional`, `Preferences`, `Usually optional`],
            [`Analytics`, `Product/website improvement`, `Consent may be required`],
            [`Marketing`, `Advertising measurement`, `Consent may be required`],
            [`Third-party`, `External services`, `Depends on purpose`],
          ],
        },
      ],
    },
  ],
  closing: {
    title: `Our Approach`,
    blocks: [
      { type: 'p', text: `Blingg uses cookies and similar technologies to make our services secure, reliable and useful, while seeking to give users meaningful control over non-essential tracking.` },
      {
        type: 'list',
        items: [
          `Necessary for security.`,
          `Transparent by design.`,
          `Controlled by you.`,
        ],
      },
      { type: 'callout', text: `Blingg — Connect. Contribute. Transact.` },
      { type: 'p', text: `© Zeta Technology Limited. All rights reserved.` },
    ],
  },
}
