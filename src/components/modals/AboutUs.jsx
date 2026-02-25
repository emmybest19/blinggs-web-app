import React from "react";

export default function AboutModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      ></div>

      {/* Modal Container */}
      <div className="relative bg-white w-full max-w-3xl h-[85vh] rounded-2xl shadow-2xl z-10 flex flex-col">

        {/* Header */}
        <div className="p-6 border-b">
          <h2 className="text-2xl font-bold">About Us — Blingg</h2>
        </div>

        {/* Scrollable Content */}
        <div className="p-6 overflow-y-auto text-gray-700 space-y-6 leading-relaxed">

          <p>
            Blingg is a community-driven social and financial platform built for how Africans truly connect, support one another, and manage shared value. We combine secure messaging, transparent group contributions, and seamless money transfers into one simple, trusted ecosystem designed for everyday life.
          </p>

          <p>
            Across Africa, communities thrive on cooperation — from family support systems to cooperative savings and contribution groups. Blingg digitizes these familiar structures, making it easier for people to communicate, contribute, and manage funds with transparency and accountability, whether they are supporting a loved one, running a community project, or organizing group savings.
          </p>

          <p>
            Our platform allows users to chat, create general or personal groups, track contributions openly, send and receive money, convert between local currency and stable digital value, and stay connected even in low-connectivity environments through nearby offline messaging.
          </p>

          <p>
            Every feature is designed to reflect real community behavior while ensuring speed, security, and trust.
          </p>

          <p>
            At Blingg, we believe technology should strengthen communities, not replace them. That’s why we focus on building tools that feel familiar, work reliably on everyday devices, and empower people to collaborate financially and socially without complexity.
          </p>

          <div className="pt-4 border-t">
            <p className="font-semibold text-lg">
              We are not just building another app — we are building digital infrastructure for African communities.
            </p>

            <p className="mt-4 font-bold text-xl">
              Blingg — Connect. Contribute. Grow Together.
            </p>
          </div>

        </div>

        {/* Footer */}
        <div className="p-6 border-t flex justify-end">
          <button
            onClick={onClose}
            className="px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}