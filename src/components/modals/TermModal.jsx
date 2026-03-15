import React from "react";

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Overlay with animation */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm modal-overlay"
        onClick={onClose}
      ></div>

      {/* Modal with animation */}
      <div className="relative bg-white w-full max-w-4xl h-[85vh] rounded-3xl shadow-2xl z-10 flex flex-col modal-content overflow-hidden">

        {/* Header */}
        <div className="p-6 border-b border-gray-200 bg-gradient-to-r from-indigo-50 to-emerald-50 flex items-center justify-between">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              BLINGG — Terms of Service
            </h2>
            <p className="text-sm text-gray-500 mt-1">
              Last Updated: March 2026
            </p>
          </div>
          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover-scale"
          >
            ✕
          </button>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto text-sm text-gray-700 space-y-4 flex-1">

          <p>
            These Terms of Service govern your access to and use of the Blingg
            website, mobile applications, and related services. By using the
            Services, you agree to these Terms.
          </p>

          <h3 className="font-semibold text-base">1. Company Information</h3>
          <p>
            Blingg is operated by Zeta Technology Limited, RC [RC NUMBER],
            14 Diamond Hill, Calabar, Nigeria.
          </p>

          <h3 className="font-semibold text-base">2. Eligibility</h3>
          <p>
            You must be at least 18 years old to access financial features.
            Messaging-only features may be available for younger users where
            legally permitted.
          </p>

          <h3 className="font-semibold text-base">3. Account Security</h3>
          <p>
            You are responsible for maintaining the security of your account,
            PIN, device, and credentials.
          </p>

          <h3 className="font-semibold text-base">4. Communications</h3>
          <p>
            Blingg provides messaging, voice notes, voice/video calls, and
            status features. Some features use end-to-end encryption.
          </p>

          <h3 className="font-semibold text-base">5. Security Scanning</h3>
          <p>
            Files and links may be scanned for security risks. This reduces
            risk but does not guarantee safety.
          </p>

          <h3 className="font-semibold text-base">6. Wallet & Transfers</h3>
          <p>
            Wallet services and transfers may rely on licensed third-party
            providers and banks. Processing times may vary.
          </p>

          <h3 className="font-semibold text-base">7. Fees</h3>
          <p>
            Applicable fees will be displayed before transaction confirmation.
          </p>

          <h3 className="font-semibold text-base">8. Prohibited Activities</h3>
          <p>
            You must not use the Services for scams, fraud, illegal activity,
            harassment, or distributing malicious content.
          </p>

          <h3 className="font-semibold text-base">9. Limitation of Liability</h3>
          <p>
            Services are provided “as is.” Liability is limited to fees paid
            in the last three months where permitted by law.
          </p>

          <h3 className="font-semibold text-base">10. Governing Law</h3>
          <p>
            These Terms are governed by the laws of the Federal Republic of
            Nigeria. Disputes will be resolved in Cross River State courts.
          </p>

          <h3 className="font-semibold text-base">Contact</h3>
          <p>
            Zeta Technology Limited<br/>
            14 Diamond Hill, Calabar, Nigeria<br/>
            support@blinggapp.com<br/>
            contact@blinggapp.com
          </p>

        </div>

        {/* Footer */}
        <div className="p-6 border-t border-gray-200 bg-gray-50 flex justify-end gap-4">
          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg border border-gray-300 text-gray-700 font-medium hover:bg-gray-100 transition-all duration-300 hover-scale"
          >
            Close
          </button>

          <button
            onClick={onClose}
            className="px-6 py-2 rounded-lg bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white font-medium transition-all duration-300 hover-scale"
          >
            Accept
          </button>
        </div>

      </div>
    </div>
  );
}