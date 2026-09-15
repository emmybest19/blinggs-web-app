/**
 * Blingg Privacy Policy, as a document descriptor.
 *
 * Rendered by LegalDocument — see ./terms.data.js for the block-type contract.
 *
 * THREE PLACEHOLDERS WERE FILLED FROM THE DOCUMENT'S OWN SECTION 34, because
 * shipping literal "[Insert Email]" text on a live privacy policy is worse than
 * a stated assumption. Each is marked `PLACEHOLDER FILLED` below. Confirm or
 * correct them before this goes to production:
 *
 *   §22 Requests can be submitted through  → legal@blinggapp.com
 *   §33 Complaints email                   → legal@blinggapp.com
 *   §33 Complaints address                 → No. 14 Diamond Street Calabar Nigeria
 *
 * Note also that the source is inconsistent about which address is the privacy
 * contact: §2 gives legal@blinggapp.com, while §34 lists hello@blinggapp.com as
 * "Privacy Email" and legal@blinggapp.com as "Data Protection Officer". Both are
 * reproduced as written; the filled placeholders above follow §2 and the DPO.
 */
export const privacyPolicy = {
  slug: 'privacy-policy',
  title: `Privacy Policy`,
  subtitle: `How Zeta Technology Limited collects, uses, protects and retains your personal information when you use Blingg.`,
  effectiveDate: `05/09/2026`,
  lastUpdated: `05/09/2026`,
  intro: [
    `Blingg is operated by Zeta Technology Limited ("Zeta", "we", "us", or "our").`,
    `This Privacy Policy explains how we collect, use, store, protect, disclose, and otherwise process personal information when you use the Blingg application, website, wallet, messaging services, group contribution features, status features, file and link scanning services, and other related services.`,
    `By using Blingg, you acknowledge that you have read this Privacy Policy.`,
  ],
  sections: [
    {
      id: 'our-commitment-to-privacy',
      title: `Our Commitment to Privacy`,
      blocks: [
        { type: 'p', text: `Blingg is built around three core principles:` },
        { type: 'callout', text: `Connect. Contribute. Transact.` },
        { type: 'p', text: `We recognize that these activities involve personal, communication, financial, and potentially sensitive information.` },
        { type: 'p', text: `We therefore seek to:` },
        {
          type: 'list',
          items: [
            `Collect information responsibly.`,
            `Collect only information reasonably necessary for our purposes.`,
            `Protect information using appropriate technical and organizational safeguards.`,
            `Explain how information is used.`,
            `Give users appropriate privacy controls.`,
            `Comply with applicable Nigerian data-protection requirements.`,
          ],
        },
        { type: 'p', text: `Blingg seeks to comply with the Nigeria Data Protection Act 2023 (NDPA) and applicable regulations and guidance issued by the Nigeria Data Protection Commission (NDPC).` },
      ],
    },
    {
      id: 'who-is-responsible-for-your-data',
      title: `Who Is Responsible for Your Data?`,
      blocks: [
        { type: 'p', text: `The primary entity responsible for your personal information is:` },
        {
          type: 'contact',
          entries: [
            { label: `Company`, value: `Zeta Technology Limited` },
            { label: `Product`, value: `Blingg` },
            { label: `Registered Address`, value: `No.14 Diamond street Calabar Nigeria` },
            { label: `Privacy Contact`, value: `legal@blinggapp.com`, href: `mailto:legal@blinggapp.com` },
          ],
        },
        { type: 'p', text: `Where a particular service is provided by a bank, payment institution, KYC provider, cloud provider, or other third party, that provider may independently process certain information under its own legal responsibilities and privacy policy.` },
      ],
    },
    {
      id: 'information-we-collect',
      title: `Information We Collect`,
      blocks: [
        { type: 'p', text: `Depending on how you use Blingg, we may collect different categories of information.` },
        { type: 'subheading', text: `A. Account Information` },
        { type: 'p', text: `When you register, we may collect:` },
        {
          type: 'list',
          items: [
            `Full name.`,
            `Phone number.`,
            `Email address.`,
            `Username/Blingg ID.`,
            `Date of birth where required.`,
            `Profile photograph.`,
            `Account credentials and authentication information.`,
            `Account preferences.`,
          ],
        },
      ],
    },
    {
      id: 'identity-and-kyc-information',
      title: `Identity and KYC Information`,
      blocks: [
        { type: 'p', text: `If you use financial services that require identity verification, we or an authorized partner may collect:` },
        {
          type: 'list',
          items: [
            `Government-issued identification information.`,
            `Identification document information.`,
            `Date of birth.`,
            `Address information.`,
            `Verification information.`,
            `Selfie or biometric verification information where legally permitted and necessary.`,
            `KYC status.`,
            `Information required to meet applicable financial regulations.`,
          ],
        },
        { type: 'p', text: `KYC information may be processed by authorized financial institutions, payment providers, identity-verification providers, or other service providers.` },
        { type: 'p', text: `We do not collect KYC information merely because you use ordinary messaging features where such information is not required.` },
      ],
    },
    {
      id: 'financial-information',
      title: `Financial Information`,
      blocks: [
        { type: 'p', text: `When you use Blingg's payment or wallet services, we may process information such as:` },
        {
          type: 'list',
          items: [
            `Wallet information.`,
            `Transaction IDs.`,
            `Transaction amounts.`,
            `Transaction dates and times.`,
            `Sender and recipient information.`,
            `Payment status.`,
            `Bank/payment-provider references.`,
            `Funding and withdrawal information.`,
            `Group contribution information.`,
            `Payment history.`,
            `Fraud/risk indicators.`,
          ],
        },
        { type: 'p', text: `Where payment services are provided through regulated financial or payment partners, those partners may separately process financial information according to their own obligations and privacy policies.` },
        { type: 'p', text: `We do not intend to store payment-card PINs, banking passwords, OTPs, or private authentication credentials in our ordinary application databases.` },
      ],
    },
    {
      id: 'messages-and-communications',
      title: `Messages and Communications`,
      blocks: [
        { type: 'p', text: `Blingg may process:` },
        {
          type: 'list',
          items: [
            `Text messages.`,
            `Voice messages.`,
            `Images.`,
            `Videos.`,
            `Documents.`,
            `Other media.`,
            `Communication metadata necessary to operate the service.`,
          ],
        },
        { type: 'subheading', text: `End-to-End Encryption` },
        { type: 'p', text: `Where Blingg provides end-to-end encrypted messaging, the content of the communication is designed to be accessible only to the communicating participants and not readable by Blingg during normal operation.` },
        { type: 'p', text: `However, encryption does not mean that every piece of information associated with a conversation is invisible to Blingg.` },
        { type: 'p', text: `We may still process limited information necessary to operate and secure the service, such as:` },
        {
          type: 'list',
          items: [
            `Account identifiers.`,
            `Delivery status.`,
            `Message timestamps.`,
            `Device information.`,
            `Security information.`,
            `Network information.`,
            `Other necessary metadata.`,
          ],
        },
        { type: 'p', text: `The exact information processed depends on the technical implementation of the relevant feature.` },
      ],
    },
    {
      id: 'status-and-user-generated-content',
      title: `Status and User-Generated Content`,
      blocks: [
        { type: 'p', text: `When you publish a Status or other content, we may process:` },
        {
          type: 'list',
          items: [
            `Text.`,
            `Images.`,
            `Videos.`,
            `Captions.`,
            `Reactions.`,
            `Other content you choose to upload.`,
          ],
        },
        { type: 'p', text: `Your visibility depends on the audience and privacy settings available within Blingg.` },
        { type: 'p', text: `You should carefully consider what you publish because content shared with other users may be copied, screenshotted, recorded, or otherwise redistributed by those users.` },
      ],
    },
    {
      id: 'file-and-link-scanning',
      title: `File and Link Scanning`,
      blocks: [
        { type: 'p', text: `Blingg may use automated security technology to scan certain files, links, URLs, or other content for security threats.` },
        { type: 'p', text: `This may help detect:` },
        {
          type: 'list',
          items: [
            `Malware.`,
            `Phishing.`,
            `Malicious URLs.`,
            `Suspicious files.`,
            `Known security threats.`,
          ],
        },
        { type: 'p', text: `Scanning capabilities may be limited where content is protected by end-to-end encryption.` },
        { type: 'p', text: `No automated security system can guarantee detection of every threat.` },
      ],
    },
    {
      id: 'device-and-technical-information',
      title: `Device and Technical Information`,
      blocks: [
        { type: 'p', text: `When you use Blingg, we may automatically collect information such as:` },
        {
          type: 'list',
          items: [
            `Device type.`,
            `Operating system.`,
            `App version.`,
            `Device identifiers.`,
            `IP address.`,
            `Network information.`,
            `Approximate location derived from IP where appropriate.`,
            `Browser information.`,
            `Crash reports.`,
            `Performance information.`,
            `Security events.`,
          ],
        },
        { type: 'p', text: `We use this information to operate, secure, troubleshoot, and improve Blingg.` },
      ],
    },
    {
      id: 'contacts',
      title: `Contacts`,
      blocks: [
        { type: 'p', text: `Where you choose to enable contact discovery, Blingg may process information from your device contacts to help you identify people you know who use Blingg.` },
        { type: 'p', text: `Contact access should require the appropriate permission from your device.` },
        { type: 'p', text: `We will not access your contacts without the applicable permission.` },
        { type: 'p', text: `Where technically feasible, contact matching should use privacy-preserving methods such as hashing or equivalent techniques rather than unnecessarily storing complete address-book information.` },
      ],
    },
    {
      id: 'location-information',
      title: `Location Information`,
      blocks: [
        { type: 'p', text: `Blingg does not need your precise GPS location for ordinary messaging and payment functionality unless a specific feature requires it.` },
        { type: 'p', text: `If a feature requires location information, we will request the appropriate permission and explain why the information is required.` },
        { type: 'p', text: `You can control location permissions through your device settings where applicable.` },
      ],
    },
    {
      id: 'how-we-use-your-information',
      title: `How We Use Your Information`,
      blocks: [
        { type: 'p', text: `We may use personal information to:` },
        { type: 'subheading', text: `Provide Blingg` },
        {
          type: 'list',
          items: [
            `Create and maintain accounts.`,
            `Send and receive messages.`,
            `Process payments.`,
            `Operate wallets.`,
            `Facilitate group contributions.`,
            `Deliver Status content.`,
            `Provide file/link security scanning.`,
            `Provide customer support.`,
          ],
        },
        { type: 'subheading', text: `Security` },
        {
          type: 'list',
          items: [
            `Detect fraud.`,
            `Prevent account takeover.`,
            `Detect malware and phishing.`,
            `Protect users.`,
            `Monitor suspicious activity.`,
            `Investigate security incidents.`,
            `Protect Blingg infrastructure.`,
          ],
        },
        { type: 'subheading', text: `Financial and Regulatory Compliance` },
        { type: 'p', text: `We may process information to:` },
        {
          type: 'list',
          items: [
            `Perform KYC.`,
            `Prevent money laundering.`,
            `Prevent terrorist financing.`,
            `Detect financial crime.`,
            `Meet lawful regulatory obligations.`,
            `Respond to lawful requests from competent authorities.`,
            `Maintain required financial records.`,
          ],
        },
        { type: 'subheading', text: `Product Improvement` },
        { type: 'p', text: `We may use appropriately protected information to:` },
        {
          type: 'list',
          items: [
            `Improve reliability.`,
            `Diagnose technical problems.`,
            `Understand feature performance.`,
            `Improve user experience.`,
            `Develop new features.`,
          ],
        },
        { type: 'p', text: `Where analytics or product improvement involves personal data, we will apply appropriate safeguards and legal requirements.` },
      ],
    },
    {
      id: 'legal-bases-for-processing',
      title: `Legal Bases for Processing`,
      blocks: [
        { type: 'p', text: `Depending on the circumstances, we may process information because:` },
        {
          type: 'list',
          items: [
            `You have provided consent.`,
            `Processing is necessary to provide a service you requested.`,
            `Processing is necessary to perform a contract with you.`,
            `Processing is necessary to comply with a legal obligation.`,
            `Processing is necessary to protect your vital interests or another person's interests where applicable.`,
            `Processing is necessary for legitimate interests, where permitted by applicable law and balanced against your rights.`,
          ],
        },
        { type: 'p', text: `Where consent is the applicable basis, you may withdraw consent where legally possible.` },
        { type: 'p', text: `Withdrawal of consent does not necessarily affect processing that occurred lawfully before withdrawal.` },
      ],
    },
    {
      id: 'who-we-share-information-with',
      title: `Who We Share Information With`,
      blocks: [
        { type: 'p', text: `We may share information with appropriate third parties where necessary to provide Blingg or comply with legal obligations.` },
        { type: 'p', text: `These may include:` },
        { type: 'subheading', text: `Payment and Financial Partners` },
        { type: 'p', text: `Banks, payment processors, financial institutions, and regulated payment providers such as Anchor, where applicable.` },
        { type: 'subheading', text: `Identity and KYC Providers` },
        { type: 'p', text: `Providers that assist with identity verification and compliance.` },
        { type: 'subheading', text: `Security Providers` },
        { type: 'p', text: `Providers that assist with:` },
        {
          type: 'list',
          items: [
            `Fraud detection.`,
            `Malware scanning.`,
            `Threat detection.`,
            `Security monitoring.`,
          ],
        },
        { type: 'subheading', text: `Infrastructure Providers` },
        { type: 'p', text: `Cloud hosting, database, storage, communications, and infrastructure providers.` },
        { type: 'subheading', text: `Professional Advisors` },
        { type: 'p', text: `Lawyers, auditors, accountants, consultants, and other professional service providers where necessary.` },
        { type: 'subheading', text: `Government and Regulatory Authorities` },
        { type: 'p', text: `We may disclose information where required or permitted by law, including in response to valid legal processes or lawful regulatory requests.` },
      ],
    },
    {
      id: 'anchor-and-financial-partners',
      title: `Anchor and Financial Partners`,
      blocks: [
        { type: 'p', text: `Where Blingg uses Anchor or another regulated financial/payment provider, certain information may be shared with that provider to:` },
        {
          type: 'list',
          items: [
            `Create or maintain financial accounts.`,
            `Process transactions.`,
            `Perform KYC.`,
            `Prevent fraud.`,
            `Meet regulatory obligations.`,
            `Reconcile transactions.`,
            `Resolve disputes.`,
          ],
        },
        { type: 'p', text: `The relevant provider may have its own privacy policy and legal responsibilities.` },
        { type: 'p', text: `Blingg does not claim that use of a third-party provider means Blingg itself has no privacy or regulatory responsibilities.` },
      ],
    },
    {
      id: 'international-data-transfers',
      title: `International Data Transfers`,
      blocks: [
        { type: 'p', text: `Some of our technology or service providers may process information outside Nigeria.` },
        { type: 'p', text: `Where personal information is transferred across borders, we will seek to use appropriate legal and security safeguards required by applicable data-protection law.` },
        { type: 'p', text: `These safeguards may include:` },
        {
          type: 'list',
          items: [
            `Contractual protections.`,
            `Appropriate security measures.`,
            `Approved transfer mechanisms where applicable.`,
            `Data minimization.`,
          ],
        },
      ],
    },
    {
      id: 'data-security',
      title: `Data Security`,
      blocks: [
        { type: 'p', text: `We use technical and organizational measures designed to protect personal information.` },
        { type: 'p', text: `These may include:` },
        {
          type: 'list',
          items: [
            `Encryption in transit.`,
            `Encryption at rest where appropriate.`,
            `Access controls.`,
            `Role-based permissions.`,
            `MFA for privileged administrative access.`,
            `Secure authentication.`,
            `Security monitoring.`,
            `Audit trails.`,
            `Vulnerability management.`,
            `Secure software development practices.`,
            `Backup and recovery controls.`,
            `Incident-response procedures.`,
          ],
        },
        { type: 'p', text: `No technology can guarantee absolute security.` },
        { type: 'p', text: `If we identify a qualifying personal-data breach, we will take appropriate steps required by applicable law.` },
      ],
    },
    {
      id: 'administrative-access',
      title: `Administrative Access`,
      blocks: [
        { type: 'p', text: `Blingg employees and administrators do not receive unrestricted access to user information.` },
        { type: 'p', text: `Administrative access should follow:` },
        { type: 'callout', text: `Least privilege + role-based access + audit logging.` },
        { type: 'p', text: `Access to sensitive information may be logged and monitored.` },
        { type: 'p', text: `Administrative actions involving sensitive user information may be recorded in Blingg's audit trail.` },
      ],
    },
    {
      id: 'audit-trails',
      title: `Audit Trails`,
      blocks: [
        { type: 'p', text: `Blingg maintains audit records for security, operational, financial, fraud-prevention and compliance purposes.` },
        { type: 'p', text: `Audit records may include:` },
        {
          type: 'list',
          items: [
            `Account events.`,
            `Authentication events.`,
            `Transaction events.`,
            `Administrative actions.`,
            `Security events.`,
            `Group contribution events.`,
            `KYC events.`,
            `System events.`,
          ],
        },
        { type: 'p', text: `Audit logs may contain identifiers, timestamps, IP addresses, device information and transaction references where necessary.` },
        { type: 'p', text: `Audit logs are protected against unauthorized modification and access.` },
      ],
    },
    {
      id: 'data-retention',
      title: `Data Retention`,
      blocks: [
        { type: 'p', text: `We retain personal information only for as long as reasonably necessary for:` },
        {
          type: 'list',
          items: [
            `Providing the service.`,
            `Maintaining your account.`,
            `Processing transactions.`,
            `Meeting legal obligations.`,
            `Financial recordkeeping.`,
            `Fraud prevention.`,
            `Security.`,
            `Resolving disputes.`,
            `Enforcing agreements.`,
          ],
        },
        { type: 'p', text: `Financial and regulatory records may need to be retained for periods required by applicable law.` },
        { type: 'p', text: `When information is no longer required, we will seek to securely delete, anonymize, or otherwise dispose of it according to applicable requirements.` },
      ],
    },
    {
      id: 'deleting-your-account',
      title: `Deleting Your Account`,
      blocks: [
        { type: 'p', text: `You may request deletion of your Blingg account through available account controls or by contacting us.` },
        { type: 'p', text: `Account deletion may not immediately remove every record.` },
        { type: 'p', text: `We may retain certain information where necessary for:` },
        {
          type: 'list',
          items: [
            `Legal compliance.`,
            `Financial records.`,
            `Fraud prevention.`,
            `Security.`,
            `Dispute resolution.`,
            `Regulatory requirements.`,
            `Legitimate business purposes permitted by law.`,
          ],
        },
      ],
    },
    {
      id: 'your-data-protection-rights',
      title: `Your Data Protection Rights`,
      blocks: [
        { type: 'p', text: `Subject to applicable law, you may have rights including:` },
        {
          type: 'list',
          items: [
            `Right to be informed.`,
            `Right to access personal information.`,
            `Right to request correction.`,
            `Right to request deletion.`,
            `Right to object to certain processing.`,
            `Right to restrict certain processing.`,
            `Right to withdraw consent where applicable.`,
            `Right to data portability where applicable.`,
            `Right to lodge a complaint with the relevant data-protection authority.`,
          ],
        },
        { type: 'p', text: `Requests can be submitted through:` },
        {
          type: 'contact',
          entries: [
            // PLACEHOLDER FILLED — source read "[Insert Email]".
            { label: `Privacy Email`, value: `legal@blinggapp.com`, href: `mailto:legal@blinggapp.com` },
          ],
        },
        { type: 'p', text: `We may need to verify your identity before fulfilling a request.` },
      ],
    },
    {
      id: 'children-and-minors',
      title: `Children and Minors`,
      blocks: [
        { type: 'p', text: `Blingg is not intended to facilitate unlawful or inappropriate financial activity involving children.` },
        { type: 'p', text: `Where applicable law requires parental/guardian consent or additional safeguards for minors, Blingg will apply those requirements.` },
        { type: 'p', text: `We may restrict or remove accounts where we reasonably believe that an account was created in violation of applicable age requirements.` },
      ],
    },
    {
      id: 'cookies-and-similar-technologies',
      title: `Cookies and Similar Technologies`,
      blocks: [
        { type: 'p', text: `Our website and certain services may use cookies or similar technologies to:` },
        {
          type: 'list',
          items: [
            `Maintain sessions.`,
            `Improve functionality.`,
            `Measure performance.`,
            `Understand usage.`,
            `Improve security.`,
          ],
        },
        { type: 'p', text: `Where required, we will request appropriate consent for non-essential cookies.` },
      ],
    },
    {
      id: 'marketing',
      title: `Marketing`,
      blocks: [
        { type: 'p', text: `Where permitted by law, Blingg may send:` },
        {
          type: 'list',
          items: [
            `Product updates.`,
            `Service announcements.`,
            `Promotional communications.`,
            `Offers.`,
          ],
        },
        { type: 'p', text: `You may be able to opt out of promotional communications.` },
        { type: 'p', text: `Some essential service communications cannot be disabled because they are necessary to operate your account.` },
      ],
    },
    {
      id: 'third-party-links',
      title: `Third-Party Links`,
      blocks: [
        { type: 'p', text: `Blingg may contain links to third-party websites or services.` },
        { type: 'p', text: `We are not responsible for the privacy practices of websites that we do not control.` },
        { type: 'p', text: `You should review the privacy policy of a third-party service before providing personal information to it.` },
      ],
    },
    {
      id: 'changes-to-this-privacy-policy',
      title: `Changes to This Privacy Policy`,
      blocks: [
        { type: 'p', text: `We may update this Privacy Policy when:` },
        {
          type: 'list',
          items: [
            `Our services change.`,
            `Our technology changes.`,
            `Legal requirements change.`,
            `Our data-processing practices change.`,
          ],
        },
        { type: 'p', text: `We will update the Last Updated date when changes are made.` },
        { type: 'p', text: `Where required by law, we will provide additional notice.` },
      ],
    },
    {
      id: 'data-breaches-and-incident-response',
      title: `Data Breaches and Incident Response`,
      blocks: [
        { type: 'p', text: `Blingg maintains procedures designed to detect, investigate, contain, and respond to personal-data and security incidents.` },
        { type: 'p', text: `Where a breach triggers notification obligations under applicable law, we will take the required steps within the applicable timelines.` },
        { type: 'p', text: `We may also take measures such as:` },
        {
          type: 'list',
          items: [
            `Account protection.`,
            `Credential resets.`,
            `Transaction restrictions.`,
            `Security investigations.`,
            `Technical remediation.`,
            `User notification where required.`,
          ],
        },
      ],
    },
    {
      id: 'your-responsibility',
      title: `Your Responsibility`,
      blocks: [
        { type: 'p', text: `You are responsible for protecting your account.` },
        { type: 'p', text: `You should:` },
        {
          type: 'list',
          items: [
            `Keep passwords and PINs confidential.`,
            `Never share OTPs.`,
            `Use device security.`,
            `Keep your application updated.`,
            `Report suspicious activity promptly.`,
            `Review financial transactions carefully.`,
          ],
        },
        { type: 'note', text: `Blingg will not ask you to provide your password, PIN or OTP through unofficial communication channels.` },
      ],
    },
    {
      id: 'privacy-and-end-to-end-encryption',
      title: `Privacy and End-to-End Encryption`,
      blocks: [
        { type: 'p', text: `Where end-to-end encryption is implemented, Blingg's ability to access the underlying communication content is technically restricted.` },
        { type: 'p', text: `However, users should understand the distinction between:` },
        {
          type: 'list',
          items: [`Message content`, `Account/service metadata`],
        },
        { type: 'p', text: `Encryption of message content does not necessarily encrypt every piece of information required to operate the service.` },
      ],
    },
    {
      id: 'financial-data-and-privacy',
      title: `Financial Data and Privacy`,
      blocks: [
        { type: 'p', text: `Financial transactions require additional security and compliance controls.` },
        { type: 'p', text: `We may process transaction information to:` },
        {
          type: 'list',
          items: [
            `Complete payments.`,
            `Prevent fraud.`,
            `Reconcile accounts.`,
            `Resolve disputes.`,
            `Meet legal requirements.`,
            `Detect suspicious activity.`,
          ],
        },
        { type: 'p', text: `We may retain transaction information even after an account is closed where required by law or necessary for legitimate security or compliance purposes.` },
      ],
    },
    {
      id: 'privacy-by-design',
      title: `Privacy by Design`,
      blocks: [
        { type: 'p', text: `Blingg aims to incorporate privacy and security into the development process rather than adding them after features are built.` },
        { type: 'p', text: `For new features, we seek to consider:` },
        {
          type: 'list',
          items: [
            `What information is actually required.`,
            `Whether less information can achieve the same purpose.`,
            `Who needs access.`,
            `How information is protected.`,
            `How long information should be retained.`,
            `Whether users should have additional controls.`,
          ],
        },
      ],
    },
    {
      id: 'complaints',
      title: `Complaints`,
      blocks: [
        { type: 'p', text: `If you have a privacy concern, contact:` },
        {
          type: 'contact',
          entries: [
            { label: `Team`, value: `Blingg Privacy Team` },
            { label: `Company`, value: `Zeta Technology Limited` },
            // PLACEHOLDER FILLED — source read "[Insert Privacy Email]".
            { label: `Email`, value: `legal@blinggapp.com`, href: `mailto:legal@blinggapp.com` },
            // PLACEHOLDER FILLED — source read "[Insert Address]".
            { label: `Address`, value: `No. 14 Diamond Street Calabar Nigeria` },
          ],
        },
        { type: 'p', text: `We will review privacy complaints and respond in accordance with applicable requirements.` },
        { type: 'p', text: `Where a complaint cannot be resolved satisfactorily, you may have the right to contact the Nigeria Data Protection Commission (NDPC) or another competent authority.` },
      ],
    },
    {
      id: 'contact-us',
      title: `Contact Us`,
      blocks: [
        { type: 'p', text: `For privacy-related questions:` },
        {
          type: 'contact',
          entries: [
            { label: `Company`, value: `Zeta Technology Limited` },
            { label: `Product`, value: `Blingg` },
            { label: `Privacy Email`, value: `hello@blinggapp.com`, href: `mailto:hello@blinggapp.com` },
            { label: `Data Protection Officer`, value: `legal@blinggapp.com`, href: `mailto:legal@blinggapp.com` },
            { label: `Registered Address`, value: `No. 14 Diamond Street Calabar Nigeria` },
          ],
        },
      ],
    },
    {
      id: 'final-privacy-principle',
      title: `Final Privacy Principle`,
      blocks: [
        { type: 'p', text: `Blingg is built to bring communication, community and financial activity together without treating users' personal information casually.` },
        { type: 'p', text: `Our approach is:` },
        {
          type: 'list',
          items: [
            `Collect responsibly.`,
            `Use transparently.`,
            `Protect aggressively.`,
            `Retain appropriately.`,
            `Give users meaningful control.`,
          ],
        },
        { type: 'callout', text: `Blingg — Connect. Contribute. Transact.` },
        { type: 'p', text: `© Zeta Technology Limited. All rights reserved.` },
      ],
    },
  ],
}
