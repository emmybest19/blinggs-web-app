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
              BLINGG — COOKIE POLICY
            </h2>
            <p className="text-sm text-gray-500 mt-1">Last Updated: 2026</p>
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

          <p className="leading-relaxed">
            We use cookies and similar technologies to operate the website, remember preferences, measure performance, and prevent abuse. You can manage cookies via browser settings.
          </p>

          <h3 className="font-semibold text-gray-900 pt-4">What are Cookies?</h3>
          <p className="text-gray-600 leading-relaxed">
            Cookies are small text files stored on your device that help us understand how you use Blingg and enhance your experience.
          </p>

          <h3 className="font-semibold text-gray-900 pt-4">Types of Cookies We Use</h3>
          <ul className="list-disc list-inside text-gray-600 space-y-2">
            <li>Essential Cookies: Required for platform functionality</li>
            <li>Analytics Cookies: Help us understand user behavior</li>
            <li>Marketing Cookies: Used to personalize your experience</li>
          </ul>

          <h3 className="font-semibold text-gray-900 pt-4">Your Privacy Rights</h3>
          <p className="text-gray-600 leading-relaxed">
            You have the right to accept or reject non-essential cookies. Visit your browser settings to manage cookie preferences at any time.
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
            Accept All
          </button>
        </div>
      </div>
    </div>
  );
}
  