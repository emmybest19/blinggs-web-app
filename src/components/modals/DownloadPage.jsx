import React from "react";

export default function ComingSoonModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Dark Background */}
      <div
        className="absolute inset-0 bg-black/60"
        onClick={onClose}
      ></div>

      {/* Modal Box */}
      <div className="relative bg-gray-400 p-8 rounded-2xl shadow-lg text-center w-96 z-10">
        <h2 className="text-2xl font-bold mb-4">Coming Soon</h2>
        <p className="text-gray-600 mb-6">
          This feature is under development.
        </p>

        <button
          onClick={onClose}
          className="bg-[#009875]  text-white px-4 py-2 rounded-lg"
        >
          Close
        </button>
      </div>
    </div>
  );
}