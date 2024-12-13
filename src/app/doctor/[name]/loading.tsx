// src/app/doctor/[name]/loading.tsx
import React from "react";

export default function Loading() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#f0f8ff]">
      <div className="w-16 h-16 border-4 border-t-4 border-[#007bff] border-solid rounded-full animate-spin"></div>
    </div>
  );
}
