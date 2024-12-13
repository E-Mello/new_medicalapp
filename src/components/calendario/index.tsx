// src/components/calendario/index.tsx

import React, { useState } from "react";

interface propCalendario {
nome: string;
dia: string;
px: string;
isSelected: boolean;
onClick: () => void;
}

export const getNome = (dia: string) => {
switch (dia) {
    case "14":
        return "Seg";
    case "15":
        return "Ter";
    case "16":
        return "Qua";
    case "17":
        return "Qui";
    default:
        return "";
    }
};

const Diasedias: React.FC<propCalendario> = ({
nome,
dia,
isSelected,
onClick,
}) => {
return (
    <button
    className={`h-14 w-14 rounded-full ${
        isSelected
        
        
        ? "bg-[#51A8FF] shadow-lg shadow-[#D4E9FF]  text-white"
        : "bg-white  shadow-sm text-black"
    }`}
    onClick={onClick}
    >
    {dia}<br /> {nome} 
    </button>
);
};

export default Diasedias;
