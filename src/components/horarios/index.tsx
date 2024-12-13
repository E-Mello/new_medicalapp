import React from "react";

interface propHorarios {
    texto: string;
    isSelected: boolean;
    onClick: () => void;
}

export const Horas: React.FC<propHorarios> = ({ texto, isSelected, onClick }) => {
    return (
        <button
            className={`px-4 py-2 ${isSelected ? 'bg-[#51A8FF] shadow-lg shadow-[#D4E9FF] text-white rounded-full' : 'rounded-full shadow-sm bg-white text-black'}`}
            onClick={onClick}
        >
            {texto}
        </button>
    );
}