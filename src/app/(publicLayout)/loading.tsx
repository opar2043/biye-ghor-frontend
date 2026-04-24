import React from "react";

export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-pink-100 via-white to-blue-100">
      <div className="text-center">
        {/* Spinner */}
        <div className="w-16 h-16 border-4 border-pink-400 border-t-transparent rounded-full animate-spin mx-auto"></div>

        {/* Text */}
        <h2 className="mt-6 text-xl font-semibold text-gray-700">
          Loading...
        </h2>

        {/* Subtext */}
        <p className="text-gray-500 text-sm mt-2">
          Please wait a moment
        </p>
      </div>
    </div>
  );
}