import React from "react";

export default function ComingSoonModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      
      {/* Dark Background with animation */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm modal-overlay"
        onClick={onClose}
      ></div>

      {/* Modal Box with animation */}
      <div className="relative bg-gradient-to-br from-white via-white to-gray-50 p-8 rounded-3xl shadow-2xl text-center w-full max-w-md z-10 modal-content">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center transition-all duration-300 hover-scale"
        >
          ✕
        </button>

        {/* Icon */}
        <div className="mb-6 animate-bounce" style={{ animationDuration: '2s' }}>
          <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full">
            <span className="text-3xl">🚀</span>
          </div>
        </div>

        {/* Content */}
        <h2 className="text-2xl md:text-3xl font-bold mb-3 text-gray-900">
          Coming Soon
        </h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          We're working hard to bring you the app download feature. Get ready to experience Blingg on your mobile device!
        </p>

        {/* Feature Preview */}
        <div className="bg-indigo-50 rounded-2xl p-4 mb-8 space-y-2">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
            <span className="text-lg">📱</span>
            <span>iOS & Android Support</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
            <span className="text-lg">🔒</span>
            <span>Bank-Grade Security</span>
          </div>
          <div className="flex items-center justify-center gap-2 text-sm text-gray-700">
            <span className="text-lg">⚡</span>
            <span>Lightning Fast Performance</span>
          </div>
        </div>

        {/* Action button */}
        <button
          onClick={onClose}
          className="btn-smooth w-full bg-gradient-to-r from-indigo-600 to-emerald-600 hover:from-indigo-700 hover:to-emerald-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center justify-center gap-2"
        >
          Got it! 
          <span>✨</span>
        </button>

        {/* Notification signup - optional */}
        <p className="text-xs text-gray-500 mt-6">
          Notify me when it's available
        </p>
      </div>
    </div>
  );
}