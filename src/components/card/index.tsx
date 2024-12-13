"use client";

import React from "react";

interface MedicalProps {
  doctorname: string;
  especialidade: string;
  avaliacao: number;
  imagem: string;
}

export default function CardMedico({
  imagem,
  doctorname,
  especialidade,
  avaliacao,
}: MedicalProps) {
  return (
    <div className="bg-white flex items-center mb-6 p-3 rounded-2xl shadow-md shadow-[#D4E9FF]">
      <img
        width={120}
        height={120}
        src={imagem}
        alt={`img ${doctorname}`}
        className="rounded-xl"
      />
      <div className="ml-4">
        <h3 className="text-base text-black font-bold">{doctorname}</h3>
        <p className="text-gray-500 text-sm">{especialidade}</p>
        <p className="text-gray-500 mt-1 flex items-center text-sm">
          ⭐{avaliacao}
        </p>
      </div>
    </div>
  );
}
