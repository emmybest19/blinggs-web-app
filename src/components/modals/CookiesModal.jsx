import React from "react";

export default function TermsModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white w-full max-w-4xl h-[85vh] rounded-2xl shadow-2xl z-10 flex flex-col">

        {/* Header */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">
            BLINGG — COOKIE POLICY
          </h2>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto text-sm text-gray-700 space-y-4">

          <p>
            We use cookies and similar technologies to operate the website, remember preferences, measure performance, and prevent abuse. You can manage cookies via browser settings
          </p>

          

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