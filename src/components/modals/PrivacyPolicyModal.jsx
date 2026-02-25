import React from "react";

export default function LegalModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-5xl h-[90vh] rounded-2xl shadow-2xl z-10 flex flex-col">

        {/* Header */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">
            BLINGG — Legal & Policies
          </h2>
          <p className="text-sm text-gray-500">
            Last Updated: [DATE]
          </p>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto text-sm text-gray-700 space-y-6 leading-relaxed">

          {/* PRIVACY POLICY */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold">
              1. Privacy Policy
            </h3>

            <p>
              This Privacy Policy explains how Blingg collects, uses, shares,
              and protects personal data when you use our Services.
            </p>

            <p>
              We process personal data in line with applicable Nigerian data
              protection requirements including NDPA and NDPR.
            </p>

            <h4 className="font-semibold">Information We Collect</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Account details (name, phone, username, email)</li>
              <li>KYC information (ID documents, selfies, BVN/NIN)</li>
              <li>Wallet and transaction records</li>
              <li>Messaging metadata (timestamps, delivery status)</li>
              <li>Status/story content and engagement data</li>
              <li>File/link scan results</li>
              <li>Device and technical information</li>
            </ul>

            <h4 className="font-semibold">How We Use Data</h4>
            <ul className="list-disc pl-6 space-y-1">
              <li>Provide and secure Services</li>
              <li>Process transfers and reconciliation</li>
              <li>Prevent fraud, phishing, and abuse</li>
              <li>Comply with legal obligations</li>
            </ul>

            <p>
              We do not sell personal data.
            </p>
          </section>

          {/* ACCEPTABLE USE POLICY */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold">
              2. Acceptable Use Policy
            </h3>

            <p>You must not use Blingg to:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Engage in fraud, scams, or phishing</li>
              <li>Launder money or finance terrorism</li>
              <li>Distribute malware or harmful links</li>
              <li>Harass, threaten, or abuse others</li>
              <li>Share illegal or exploitative content</li>
              <li>Attempt unauthorized system access</li>
            </ul>

            <p>
              We may suspend or terminate accounts and cooperate with
              authorities where required.
            </p>
          </section>

          {/* REFUNDS & DISPUTES */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold">
              3. Refunds, Reversals & Disputes
            </h3>

            <p>
              Internal transfers may be irreversible once completed.
            </p>

            <p>
              Bank transfers depend on providers and reconciliation timelines.
              Failed transactions may be refunded after review.
            </p>

            <p>
              Group withdrawals follow in-app permissions and may not be
              reversible.
            </p>

            <p>
              Crypto transfers are generally irreversible and subject to
              market volatility.
            </p>
          </section>

          {/* CRYPTO RISK DISCLOSURE */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold">
              4. Crypto Risk Disclosure (If Enabled)
            </h3>

            <p>
              Digital assets are volatile and may lose value.
              Network congestion and confirmations may delay transactions.
              You are responsible for verifying wallet addresses and understanding risks.
            </p>
          </section>

          {/* SECURITY NOTICE */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold">
              5. Security Notice
            </h3>

            <ul className="list-disc pl-6 space-y-1">
              <li>End-to-end encryption protects message content</li>
              <li>File and link scanning helps reduce phishing risks</li>
            </ul>

            <p>
              These protections reduce risk but do not eliminate all threats.
              Always verify recipients and protect your device.
            </p>
          </section>

          {/* COMMUNITY GUIDELINES */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold">
              6. Community & Content Guidelines
            </h3>

            <p>Do not post or share:</p>

            <ul className="list-disc pl-6 space-y-1">
              <li>Scams or impersonation</li>
              <li>Malware or harmful links</li>
              <li>Harassment or hate speech</li>
              <li>Illegal content</li>
              <li>Child exploitation material (zero tolerance)</li>
            </ul>

            <p>
              We may remove content and suspend accounts to protect users.
            </p>
          </section>

          {/* CONTACT */}
          <section className="space-y-3">
            <h3 className="text-lg font-semibold">
              7. Contact & Support
            </h3>

            <p>
              Zeta Technology Limited  
              14 Diamond Hill, Calabar, Nigeria  
              Support: support@blinggapp.com  
              Business: contact@blinggapp.com  
              Support Hours: [HOURS]
            </p>
          </section>

        </div>

        {/* Footer */}
        <div className="p-6 border-t flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg border border-gray-300"
          >
            Close
          </button>

          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-black text-white"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
}