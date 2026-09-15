/**
 * Blingg Terms of Service, as a document descriptor.
 *
 * Legal copy is data, not markup: LegalDocument renders this, so a wording
 * change is an edit here and a new policy (privacy, cookies) is a new file in
 * this folder rather than another page component.
 *
 * Block types understood by the renderer:
 *   { type: 'p',          text }         paragraph
 *   { type: 'list',       items }        bulleted list
 *   { type: 'subheading', text }         heading inside a section
 *   { type: 'callout',    text }         emphasised brand line
 *   { type: 'note',       text }         warning the reader must not miss
 *   { type: 'contact',    entries }      label/value pairs, values may be links
 *
 * Strings are template literals throughout so apostrophes and quotation marks
 * in the legal text need no escaping.
 */
export const termsOfService = {
  slug: 'terms-of-service',
  title: `Terms of Service`,
  subtitle: `The agreement between you and Zeta Technology Limited covering your use of Blingg.`,
  effectiveDate: `05/09/2016`,
  lastUpdated: `05/09/2026`,
  intro: [
    `Welcome to Blingg, a digital communication, community and payment platform operated by Zeta Technology Limited, a company incorporated in Nigeria.`,
    `These Terms of Service ("Terms") govern your access to and use of the Blingg application, website, wallet services, messaging services, group contribution features, status features, file and link scanning features, and other services made available by Blingg.`,
    `By creating an account, accessing, or using Blingg, you agree to these Terms. If you do not agree with these Terms, you should not use Blingg.`,
  ],
  sections: [
    {
      id: 'about-blingg',
      title: `About Blingg`,
      blocks: [
        { type: 'p', text: `Blingg is designed to help people:` },
        {
          type: 'list',
          items: [
            `Connect and communicate.`,
            `Send and receive money.`,
            `Create and participate in groups.`,
            `Make group contributions.`,
            `Share statuses and content.`,
            `Share files, links, images, videos and other media.`,
            `Communicate through voice and video features where available.`,
            `Manage their Blingg account and wallet.`,
          ],
        },
        { type: 'p', text: `Blingg is designed around the principle:` },
        { type: 'callout', text: `Connect. Contribute. Transact.` },
      ],
    },
    {
      id: 'eligibility',
      title: `Eligibility`,
      blocks: [
        { type: 'p', text: `You must provide accurate information when creating your Blingg account.` },
        { type: 'p', text: `You must:` },
        {
          type: 'list',
          items: [
            `Be legally capable of entering into these Terms.`,
            `Provide accurate registration information.`,
            `Maintain the security of your account.`,
            `Complete identity verification where required.`,
            `Comply with applicable Nigerian law and these Terms.`,
          ],
        },
        { type: 'p', text: `Certain financial features may have additional age, identity, KYC, transaction-limit or eligibility requirements.` },
        { type: 'p', text: `Blingg may restrict certain services until required verification has been completed.` },
      ],
    },
    {
      id: 'account-registration',
      title: `Account Registration`,
      blocks: [
        { type: 'p', text: `You may be required to provide information including:` },
        {
          type: 'list',
          items: [
            `Full name.`,
            `Phone number.`,
            `Email address.`,
            `Date of birth.`,
            `Identification information.`,
            `Other information required for KYC or security purposes.`,
          ],
        },
        { type: 'p', text: `You are responsible for ensuring that your information remains accurate and up to date.` },
        { type: 'p', text: `You must not:` },
        {
          type: 'list',
          items: [
            `Create an account using another person's identity.`,
            `Create accounts for fraudulent purposes.`,
            `Impersonate another person.`,
            `Share your authentication credentials.`,
            `Allow unauthorized persons to operate your account.`,
          ],
        },
        { type: 'p', text: `Blingg may suspend or restrict accounts where information appears fraudulent, misleading, compromised, or inconsistent with applicable law.` },
      ],
    },
    {
      id: 'kyc-and-verification',
      title: `KYC and Verification`,
      blocks: [
        { type: 'p', text: `Blingg may require users to complete Know Your Customer ("KYC") and identity verification procedures before accessing certain financial services.` },
        { type: 'p', text: `Verification may be performed by Blingg, its regulated financial/payment partners, or approved third-party service providers.` },
        { type: 'p', text: `You authorize Blingg and relevant service providers to process information necessary to perform these checks in accordance with applicable law and Blingg's Privacy Policy.` },
      ],
    },
    {
      id: 'sending-and-receiving-money',
      title: `Sending and Receiving Money`,
      blocks: [
        { type: 'p', text: `Blingg may allow eligible users to send and receive money through supported payment channels.` },
        { type: 'p', text: `Depending on the transaction, funds may be processed through:` },
        {
          type: 'list',
          items: [
            `Blingg's systems;`,
            `Banks;`,
            `Payment service providers;`,
            `Payment processors;`,
            `Regulated financial institutions; or`,
            `Other authorized partners.`,
          ],
        },
        { type: 'p', text: `The availability of a particular payment service depends on the applicable provider, account status, transaction limits, system availability and regulatory requirements.` },
        { type: 'p', text: `You agree that:` },
        {
          type: 'list',
          items: [
            `You will only initiate legitimate transactions.`,
            `You will provide accurate recipient information.`,
            `You will not use Blingg for fraud, money laundering, terrorist financing or other unlawful activity.`,
            `You will not knowingly receive or transfer proceeds of crime.`,
            `You will cooperate with reasonable transaction verification requests.`,
          ],
        },
      ],
    },
    {
      id: 'transaction-authorization',
      title: `Transaction Authorization`,
      blocks: [
        { type: 'p', text: `When you authorize a payment, transfer or other financial transaction, you are responsible for ensuring that the recipient and transaction information are correct.` },
        { type: 'p', text: `Where a transaction has already been processed, cancellation or reversal may not always be possible.` },
        { type: 'p', text: `Blingg may delay, reject, suspend or review transactions where reasonably necessary for:` },
        {
          type: 'list',
          items: [
            `Fraud prevention.`,
            `Security.`,
            `KYC requirements.`,
            `AML/CFT obligations.`,
            `Regulatory requirements.`,
            `Technical issues.`,
            `Payment-provider requirements.`,
            `Suspicious activity investigations.`,
          ],
        },
      ],
    },
    {
      id: 'payment-providers-and-anchor',
      title: `Payment Providers and Anchor`,
      blocks: [
        { type: 'p', text: `Certain payment and financial services offered through Blingg may be provided or facilitated by third-party financial institutions or payment infrastructure providers, including Anchor, where applicable.` },
        { type: 'p', text: `Where a third-party regulated provider processes a transaction, that provider's applicable terms, policies, regulatory obligations and service limitations may also apply.` },
        { type: 'p', text: `Blingg does not represent that use of a third-party provider removes any regulatory obligations applicable to Blingg.` },
        { type: 'p', text: `Blingg may change, add or remove payment partners when reasonably necessary to maintain, improve or comply with applicable requirements.` },
      ],
    },
    {
      id: 'blingg-wallet',
      title: `Blingg Wallet`,
      blocks: [
        { type: 'p', text: `Where available, eligible users may maintain a Blingg wallet for supported transactions.` },
        { type: 'p', text: `Wallet balances and transaction records may be subject to:` },
        {
          type: 'list',
          items: [
            `KYC requirements;`,
            `Transaction limits;`,
            `Fraud monitoring;`,
            `Regulatory requirements;`,
            `Provider restrictions;`,
            `Temporary holds or reviews.`,
          ],
        },
        { type: 'p', text: `Blingg may restrict access to a wallet where required to protect users, investigate suspected fraud, comply with legal obligations, or comply with a financial partner's requirements.` },
      ],
    },
    {
      id: 'fees-and-charges',
      title: `Fees and Charges`,
      blocks: [
        { type: 'p', text: `Blingg may charge fees for certain services.` },
        { type: 'p', text: `Applicable charges may include:` },
        { type: 'subheading', text: `Sending Money` },
        { type: 'p', text: `A fee may apply when sending money depending on:` },
        {
          type: 'list',
          items: [
            `Transaction type;`,
            `Destination;`,
            `Payment channel;`,
            `Payment provider;`,
            `Applicable taxes;`,
            `Current Blingg pricing.`,
          ],
        },
        { type: 'subheading', text: `Receiving Money` },
        { type: 'p', text: `Blingg may charge a fee for receiving certain types of payments where applicable.` },
        { type: 'p', text: `Any applicable fee should be displayed before the transaction is completed, where reasonably practicable.` },
        { type: 'subheading', text: `Group Transactions` },
        { type: 'p', text: `Blingg may charge fees relating to:` },
        {
          type: 'list',
          items: [
            `Group contributions;`,
            `Group disbursements;`,
            `Payment processing;`,
            `Withdrawal;`,
            `Other group financial services.`,
          ],
        },
        { type: 'subheading', text: `Service/Maintenance Charges` },
        { type: 'p', text: `Blingg may introduce a reasonable account or service maintenance charge for certain services where permitted by applicable law.` },
        { type: 'p', text: `Where such a charge applies, Blingg will provide reasonable notice and disclose the amount or method of calculation before the charge becomes effective.` },
        { type: 'p', text: `Blingg will not represent a service as "free" where a mandatory charge applies.` },
      ],
    },
    {
      id: 'changes-to-fees',
      title: `Changes to Fees`,
      blocks: [
        { type: 'p', text: `Blingg may modify its pricing from time to time.` },
        { type: 'p', text: `Where required, users will receive reasonable notice of material changes.` },
        { type: 'p', text: `Continued use of the affected service after the effective date of a change may constitute acceptance of the revised charges.` },
      ],
    },
    {
      id: 'group-contributions',
      title: `Group Contributions`,
      blocks: [
        { type: 'p', text: `Blingg may allow users to create groups for collective contributions.` },
        { type: 'p', text: `Groups may include different administrative structures.` },
        { type: 'subheading', text: `Personal Groups` },
        { type: 'p', text: `The designated administrator may manage funds according to the group's rules and applicable Blingg controls.` },
        { type: 'subheading', text: `General Groups` },
        { type: 'p', text: `General Groups may require a specified percentage of eligible members to approve certain withdrawals or disbursements.` },
        { type: 'p', text: `Where Blingg's system requires 60% approval, the withdrawal will only proceed when the required threshold has been reached and all applicable security and payment checks have passed.` },
        { type: 'p', text: `Blingg maintains records of relevant contribution, approval and disbursement activity for security, dispute resolution, compliance and auditing purposes.` },
      ],
    },
    {
      id: 'group-administrators',
      title: `Group Administrators`,
      blocks: [
        { type: 'p', text: `Group administrators are responsible for managing their groups responsibly.` },
        { type: 'p', text: `Administrators must not:` },
        {
          type: 'list',
          items: [
            `Misappropriate group funds.`,
            `Manipulate group approvals.`,
            `Create fraudulent members.`,
            `Circumvent Blingg's approval mechanisms.`,
            `Use group funds for unlawful purposes.`,
          ],
        },
        { type: 'p', text: `Blingg may investigate disputes or suspicious activity involving group funds.` },
      ],
    },
    {
      id: 'messaging',
      title: `Messaging`,
      blocks: [
        { type: 'p', text: `Blingg allows users to communicate through text and other supported messaging features.` },
        { type: 'p', text: `You are responsible for the content you send.` },
        { type: 'p', text: `You must not use Blingg to:` },
        {
          type: 'list',
          items: [
            `Threaten or harass people.`,
            `Defraud users.`,
            `Distribute malware.`,
            `Conduct phishing.`,
            `Distribute illegal content.`,
            `Facilitate criminal activity.`,
            `Impersonate another person.`,
            `Distribute content that violates applicable law.`,
          ],
        },
      ],
    },
    {
      id: 'end-to-end-encryption-and-security',
      title: `End-to-End Encryption and Security`,
      blocks: [
        { type: 'p', text: `Where Blingg provides end-to-end encrypted messaging, the content of the communication is designed so that the communication is protected between the intended participants.` },
        { type: 'p', text: `Encryption does not make a user anonymous or exempt them from applicable law.` },
        { type: 'p', text: `Blingg may still process certain metadata necessary to operate, secure and improve the service, such as:` },
        {
          type: 'list',
          items: [
            `Account identifiers.`,
            `Delivery information.`,
            `Device information.`,
            `Authentication events.`,
            `Transaction information.`,
            `Security events.`,
          ],
        },
        { type: 'p', text: `Blingg will not claim that all information associated with your account is end-to-end encrypted simply because a particular messaging feature uses encryption.` },
      ],
    },
    {
      id: 'file-and-link-scanning',
      title: `File and Link Scanning`,
      blocks: [
        { type: 'p', text: `Blingg may provide security features that scan files, links, URLs or other content for potentially harmful or malicious activity.` },
        { type: 'p', text: `These security systems may identify:` },
        {
          type: 'list',
          items: [
            `Malware.`,
            `Phishing links.`,
            `Malicious files.`,
            `Suspicious URLs.`,
            `Known threats.`,
            `Other security risks.`,
          ],
        },
        { type: 'p', text: `Scanning may involve automated security systems or approved security providers.` },
        { type: 'p', text: `Where content is protected by end-to-end encryption, Blingg's ability to inspect that content may be limited. Security scanning will therefore operate only where technically and legally possible.` },
        { type: 'p', text: `No scanning system can guarantee detection of every malicious file or link.` },
      ],
    },
    {
      id: 'status',
      title: `Status`,
      blocks: [
        { type: 'p', text: `Users may post text, images, videos and other permitted content through Blingg Status.` },
        { type: 'p', text: `You are responsible for ensuring that your Status content:` },
        {
          type: 'list',
          items: [
            `Belongs to you or is properly licensed.`,
            `Does not infringe intellectual-property rights.`,
            `Does not contain unlawful material.`,
            `Does not facilitate fraud or scams.`,
            `Does not violate these Terms.`,
          ],
        },
        { type: 'p', text: `Blingg may remove or restrict content that violates these Terms or applicable law.` },
      ],
    },
    {
      id: 'user-content',
      title: `User Content`,
      blocks: [
        { type: 'p', text: `You retain ownership of content that you create and upload to Blingg, subject to the rights and permissions necessary for Blingg to operate the service.` },
        { type: 'p', text: `By uploading content, you grant Blingg a limited, non-exclusive, worldwide, royalty-free license to host, store, process, reproduce and transmit that content as reasonably necessary to provide the service.` },
        { type: 'p', text: `This license ends when the content is deleted, subject to:` },
        {
          type: 'list',
          items: [
            `Legal retention requirements.`,
            `Security requirements.`,
            `Backup systems.`,
            `Dispute resolution.`,
            `Other legitimate operational requirements.`,
          ],
        },
        { type: 'p', text: `Blingg does not obtain ownership of your personal content merely because you use the service.` },
      ],
    },
    {
      id: 'prohibited-use',
      title: `Prohibited Use`,
      blocks: [
        { type: 'p', text: `You must not use Blingg to:` },
        {
          type: 'list',
          items: [
            `Commit fraud.`,
            `Launder money.`,
            `Finance terrorism.`,
            `Conduct scams.`,
            `Steal identities.`,
            `Distribute malware.`,
            `Conduct phishing.`,
            `Circumvent security controls.`,
            `Manipulate transactions.`,
            `Exploit vulnerabilities.`,
            `Access another person's account.`,
            `Reverse engineer Blingg unlawfully.`,
            `Interfere with Blingg's infrastructure.`,
            `Use automated systems to abuse the service.`,
            `Conduct activities prohibited by Nigerian law.`,
          ],
        },
        { type: 'p', text: `Blingg may suspend or terminate accounts involved in prohibited activity.` },
      ],
    },
    {
      id: 'fraud-aml-and-security-monitoring',
      title: `Fraud, AML and Security Monitoring`,
      blocks: [
        { type: 'p', text: `Blingg may monitor transactions and account activity for security, fraud prevention, AML/CFT obligations and compliance with applicable law.` },
        { type: 'p', text: `We may:` },
        {
          type: 'list',
          items: [
            `Delay transactions.`,
            `Request additional information.`,
            `Restrict an account.`,
            `Suspend certain services.`,
            `Report information where legally required.`,
            `Cooperate with lawful requests from competent authorities.`,
          ],
        },
        { type: 'p', text: `We may not always be able to disclose the details of security or compliance investigations.` },
      ],
    },
    {
      id: 'data-protection-and-ndpa-compliance',
      title: `Data Protection and NDPA Compliance`,
      blocks: [
        { type: 'p', text: `Zeta Technology Limited will process personal information in accordance with applicable Nigerian data-protection requirements, including the Nigeria Data Protection Act (NDPA) 2023, as applicable.` },
        { type: 'p', text: `Blingg will seek to apply:` },
        {
          type: 'list',
          items: [
            `Lawfulness and transparency.`,
            `Purpose limitation.`,
            `Data minimization.`,
            `Accuracy.`,
            `Storage limitation.`,
            `Security safeguards.`,
            `Privacy by design and default.`,
            `Appropriate user rights and controls.`,
          ],
        },
        { type: 'p', text: `The NDPA framework emphasizes fair, lawful and transparent processing and privacy by design/default.` },
        { type: 'p', text: `Our Privacy Policy explains in greater detail:` },
        {
          type: 'list',
          items: [
            `What information we collect.`,
            `Why we collect it.`,
            `How we use it.`,
            `Who we may share it with.`,
            `How long we retain it.`,
            `Your applicable data rights.`,
            `How to contact us regarding privacy matters.`,
          ],
        },
      ],
    },
    {
      id: 'data-sharing-with-service-providers',
      title: `Data Sharing with Service Providers`,
      blocks: [
        { type: 'p', text: `Blingg may share information with trusted service providers where necessary to provide or secure the service.` },
        { type: 'p', text: `These may include:` },
        {
          type: 'list',
          items: [
            `Payment providers.`,
            `Banks.`,
            `KYC providers.`,
            `Fraud-prevention providers.`,
            `Cloud infrastructure providers.`,
            `Security providers.`,
            `Communication providers.`,
            `Analytics providers.`,
          ],
        },
        { type: 'p', text: `Such sharing will be subject to applicable law, contractual safeguards and the purpose for which the information is processed.` },
      ],
    },
    {
      id: 'user-security-responsibilities',
      title: `User Security Responsibilities`,
      blocks: [
        { type: 'p', text: `You are responsible for keeping your account secure.` },
        { type: 'p', text: `You must:` },
        {
          type: 'list',
          items: [
            `Keep authentication credentials confidential.`,
            `Protect your device.`,
            `Use appropriate security controls.`,
            `Report unauthorized access promptly.`,
            `Never disclose OTPs or PINs to another person.`,
            `Review transactions carefully.`,
          ],
        },
        { type: 'note', text: `Blingg will never ask you to disclose your password, PIN or OTP through an unofficial channel.` },
      ],
    },
    {
      id: 'transaction-disputes',
      title: `Transaction Disputes`,
      blocks: [
        { type: 'p', text: `If you believe that:` },
        {
          type: 'list',
          items: [
            `A transaction was unauthorized;`,
            `Money was sent incorrectly;`,
            `A payment failed;`,
            `Your wallet was incorrectly charged; or`,
            `Another financial problem occurred,`,
          ],
        },
        { type: 'p', text: `you should contact Blingg support promptly through the official support channels.` },
        { type: 'p', text: `Blingg may request information necessary to investigate the matter.` },
        { type: 'p', text: `Where a transaction involves a third-party payment provider, the investigation may also involve that provider.` },
      ],
    },
    {
      id: 'refunds-and-reversals',
      title: `Refunds and Reversals`,
      blocks: [
        { type: 'p', text: `Where a transaction fails, is reversed, or cannot be completed, applicable funds may be returned according to the transaction type, payment provider procedures and applicable law.` },
        { type: 'p', text: `A refund is not guaranteed merely because a user changes their mind after a successfully completed transaction.` },
        { type: 'p', text: `Nothing in these Terms excludes consumer rights or remedies that cannot lawfully be excluded.` },
      ],
    },
    {
      id: 'service-availability',
      title: `Service Availability`,
      blocks: [
        { type: 'p', text: `We aim to provide Blingg reliably, but we do not guarantee that the service will always be:` },
        {
          type: 'list',
          items: [
            `Available;`,
            `Uninterrupted;`,
            `Error-free;`,
            `Free from delays; or`,
            `Free from security incidents.`,
          ],
        },
        { type: 'p', text: `Temporary interruption may occur because of:` },
        {
          type: 'list',
          items: [
            `Maintenance.`,
            `Network failure.`,
            `Payment-provider downtime.`,
            `Banking-system issues.`,
            `Security incidents.`,
            `Regulatory requirements.`,
            `Events outside our reasonable control.`,
          ],
        },
      ],
    },
    {
      id: 'third-party-services',
      title: `Third-Party Services`,
      blocks: [
        { type: 'p', text: `Blingg may integrate with third-party services.` },
        { type: 'p', text: `Third-party services may have separate:` },
        {
          type: 'list',
          items: [
            `Terms;`,
            `Privacy policies;`,
            `Fees;`,
            `Availability requirements;`,
            `Transaction limitations.`,
          ],
        },
        { type: 'p', text: `Blingg is not responsible for independent failures of third-party systems, although we will make reasonable efforts to assist users with issues involving integrated services.` },
      ],
    },
    {
      id: 'intellectual-property',
      title: `Intellectual Property`,
      blocks: [
        { type: 'p', text: `Blingg and its underlying software, branding, designs, logos, technology and other proprietary materials are owned by or licensed to Zeta Technology Limited.` },
        { type: 'p', text: `You may not:` },
        {
          type: 'list',
          items: [
            `Copy Blingg's software.`,
            `Reproduce its branding without permission.`,
            `Sell or sublicense the platform.`,
            `Reverse engineer it unlawfully.`,
            `Remove proprietary notices.`,
            `Use Blingg intellectual property to create a competing service without authorization.`,
          ],
        },
      ],
    },
    {
      id: 'account-suspension-and-termination',
      title: `Account Suspension and Termination`,
      blocks: [
        { type: 'p', text: `Blingg may restrict or suspend an account where reasonably necessary because of:` },
        {
          type: 'list',
          items: [
            `Fraud.`,
            `Security concerns.`,
            `Violation of these Terms.`,
            `Legal requirements.`,
            `KYC failure.`,
            `Suspicious transactions.`,
            `Abuse of the platform.`,
            `Threats to other users or Blingg.`,
          ],
        },
        { type: 'p', text: `Where legally permissible, we will provide appropriate notice or explanation.` },
        { type: 'p', text: `Some restrictions may occur without prior notice where immediate action is necessary to protect users, funds or the platform.` },
      ],
    },
    {
      id: 'account-closure',
      title: `Account Closure`,
      blocks: [
        { type: 'p', text: `You may request closure of your Blingg account.` },
        { type: 'p', text: `Before closure, you may be required to:` },
        {
          type: 'list',
          items: [
            `Complete pending transactions.`,
            `Resolve outstanding obligations.`,
            `Withdraw eligible funds.`,
            `Complete verification.`,
            `Resolve disputes.`,
          ],
        },
        { type: 'p', text: `Certain information may be retained after account closure where required for legal, regulatory, security, fraud-prevention, accounting or dispute-resolution purposes.` },
      ],
    },
    {
      id: 'changes-to-blingg',
      title: `Changes to Blingg`,
      blocks: [
        { type: 'p', text: `We may modify, improve, suspend or discontinue features from time to time.` },
        { type: 'p', text: `Changes may include:` },
        {
          type: 'list',
          items: [
            `New messaging features.`,
            `New payment features.`,
            `Security improvements.`,
            `Group features.`,
            `Status features.`,
            `Changes to supported payment providers.`,
            `Changes required by law or regulation.`,
          ],
        },
        { type: 'p', text: `Where a change materially affects these Terms, we may provide appropriate notice.` },
      ],
    },
    {
      id: 'changes-to-these-terms',
      title: `Changes to These Terms`,
      blocks: [
        { type: 'p', text: `We may update these Terms from time to time.` },
        { type: 'p', text: `The updated version will include a revised "Last Updated" date.` },
        { type: 'p', text: `Where legally required, we will provide additional notice of material changes.` },
        { type: 'p', text: `Your continued use of Blingg after the effective date of updated Terms may constitute acceptance of the revised Terms.` },
      ],
    },
    {
      id: 'disclaimer',
      title: `Disclaimer`,
      blocks: [
        { type: 'p', text: `Blingg provides technology and communication/payment services subject to applicable law and the availability of relevant regulated partners.` },
        { type: 'p', text: `Nothing in these Terms constitutes:` },
        {
          type: 'list',
          items: [
            `Investment advice;`,
            `Financial advice;`,
            `Banking advice;`,
            `Legal advice; or`,
            `A guarantee of uninterrupted financial services.`,
          ],
        },
        { type: 'p', text: `Where regulated financial services are provided by a licensed partner, the applicable partner's regulatory framework and terms may apply.` },
      ],
    },
    {
      id: 'limitation-of-liability',
      title: `Limitation of Liability`,
      blocks: [
        { type: 'p', text: `To the extent permitted by applicable law, Zeta Technology Limited will not be responsible for losses arising solely from:` },
        {
          type: 'list',
          items: [
            `User negligence.`,
            `Incorrect recipient information.`,
            `Unauthorized sharing of credentials.`,
            `Third-party service failures.`,
            `Network failures.`,
            `Events beyond our reasonable control.`,
          ],
        },
        { type: 'p', text: `Nothing in these Terms limits liability that cannot lawfully be limited or excluded under applicable Nigerian law.` },
      ],
    },
    {
      id: 'indemnification',
      title: `Indemnification`,
      blocks: [
        { type: 'p', text: `To the extent permitted by law, you agree to indemnify Zeta Technology Limited against claims, losses or expenses arising from your:` },
        {
          type: 'list',
          items: [
            `Fraudulent use of Blingg;`,
            `Violation of these Terms;`,
            `Unlawful activities;`,
            `Infringement of another person's rights; or`,
            `Misuse of the platform.`,
          ],
        },
      ],
    },
    {
      id: 'governing-law',
      title: `Governing Law`,
      blocks: [
        { type: 'p', text: `These Terms shall be governed by the laws of the Federal Republic of Nigeria.` },
        { type: 'p', text: `Any dispute shall be handled through the applicable dispute-resolution mechanisms and courts having jurisdiction in Nigeria, subject to applicable consumer-protection rights.` },
      ],
    },
    {
      id: 'consumer-protection',
      title: `Consumer Protection`,
      blocks: [
        { type: 'p', text: `Blingg seeks to provide services fairly, transparently and responsibly.` },
        { type: 'p', text: `Nothing in these Terms is intended to remove rights that users have under mandatory Nigerian consumer-protection law.` },
        { type: 'p', text: `The FCCPC is Nigeria's principal consumer-protection authority and its framework emphasizes consumer welfare and fair treatment.` },
      ],
    },
    {
      id: 'contact-and-complaints',
      title: `Contact and Complaints`,
      blocks: [
        { type: 'p', text: `For support, complaints, transaction disputes or account issues, users may contact Blingg through the official support channels provided in the application or on the official Blingg website.` },
        { type: 'p', text: `When contacting support regarding a transaction, users should provide:` },
        {
          type: 'list',
          items: [
            `Transaction ID;`,
            `Date;`,
            `Amount;`,
            `Relevant account information; and`,
            `Description of the issue.`,
          ],
        },
        { type: 'note', text: `Do not send your PIN, password or OTP to support.` },
      ],
    },
    {
      id: 'entire-agreement',
      title: `Entire Agreement`,
      blocks: [
        { type: 'p', text: `These Terms, together with the Blingg Privacy Policy and other applicable policies displayed within the service, constitute the agreement between you and Zeta Technology Limited regarding your use of Blingg, except where separate terms apply to a particular service.` },
        { type: 'p', text: `If a specific financial service has additional terms, those terms will apply to that service in addition to these Terms.` },
      ],
    },
    {
      id: 'severability',
      title: `Severability`,
      blocks: [
        { type: 'p', text: `If any provision of these Terms is determined to be invalid or unenforceable, the remaining provisions will continue to apply to the extent permitted by law.` },
      ],
    },
    {
      id: 'contact-information',
      title: `Contact Information`,
      blocks: [
        {
          type: 'contact',
          entries: [
            { label: `Company`, value: `Zeta Technology Limited` },
            { label: `Product`, value: `Blingg` },
            { label: `Registered Address`, value: `No.14 Diamnond street Calabar Nigeria` },
            { label: `Support`, value: `hello@blinggapp.com`, href: `mailto:hello@blinggapp.com` },
            { label: `Privacy`, value: `legal@blinggapp.com`, href: `mailto:legal@blinggapp.com` },
          ],
        },
      ],
    },
  ],
  closing: {
    title: `Your Use of Blingg`,
    blocks: [
      { type: 'p', text: `By creating an account and using Blingg, you acknowledge that you have read and understood these Terms of Service and agree to be bound by them.` },
      { type: 'callout', text: `Connect. Contribute. Transact.` },
      { type: 'p', text: `Blingg — by Zeta Technology Limited.` },
    ],
  },
}
