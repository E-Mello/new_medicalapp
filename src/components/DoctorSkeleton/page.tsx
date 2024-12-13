import React from "react";

export default function DoctorSkeleton() {
  return (
    <div className="min-h-screen pt-4 bg-[#f7f7f7] animate-pulse">
      {/* Header */}
      <div className="flex py-10 p-6 justify-between">
        <div className="flex shadow-xl rounded-xl bg-gray-300 items-center w-10 h-10"></div>
        <div className="flex font-bold text-lg bg-gray-300 w-32 h-6 rounded-md"></div>
        <div className="w-10"></div>
      </div>

      {/* Doctor's Detail */}
      <div className="max-w pr-4 pl-4 font-bold">
        <div className="flex max-w p-4 rounded-lg">
          <div className="w-36 h-36 bg-gray-300 rounded-2xl"></div>
          <div className="ml-4">
            <div className="w-24 h-6 bg-gray-300 rounded-md mb-2"></div>
            <div className="w-40 h-4 bg-gray-300 rounded-md mb-1"></div>
            <div className="w-16 h-4 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        <div className="flex max-w text-gray-500 pt-4 pl-4 pr-6">
          <div className="w-full">
            <div className="w-24 h-6 bg-gray-300 rounded-md mb-2"></div>
            <div className="w-full h-12 bg-gray-300 rounded-md"></div>
          </div>
        </div>

        <div className="pt-4 pl-4">
          <div className="w-24 h-6 bg-gray-300 rounded-md mb-2"></div>
          <div className="flex gap-2">
            <div className="w-20 h-4 bg-gray-300 rounded-md"></div>
            <div className="w-20 h-4 bg-gray-300 rounded-md"></div>
            <div className="w-20 h-4 bg-gray-300 rounded-md"></div>
          </div>
        </div>
      </div>

      {/* Agendamento */}
      <div className="px-8 pt-4">
        <div className="w-32 h-6 bg-gray-300 rounded-md mb-3"></div>
        <div className="flex justify-between">
          <div className="w-12 h-10 bg-gray-300 rounded-md"></div>
          <div className="w-12 h-10 bg-gray-300 rounded-md"></div>
          <div className="w-12 h-10 bg-gray-300 rounded-md"></div>
          <div className="w-12 h-10 bg-gray-300 rounded-md"></div>
        </div>
      </div>

      <div className="px-8 pt-4 pb-16">
        <div className="w-32 h-6 bg-gray-300 rounded-md mb-3"></div>
        <div className="flex justify-between">
          <div className="w-20 h-10 bg-gray-300 rounded-md"></div>
          <div className="w-20 h-10 bg-gray-300 rounded-md"></div>
          <div className="w-20 h-10 bg-gray-300 rounded-md"></div>
        </div>
      </div>

      {/* Botão */}
      <div className="justify-center items-center flex">
        <div className="bg-gray-300 shadow-lg px-20 rounded-full py-6 max-w-96"></div>
      </div>
    </div>
  );
}
