import React, { useState } from "react";

interface propImg {
  imagem: string;
  isSelected: boolean;
  onClick: () => void;
}

export const BotoesCategorias: React.FC<propImg> = ({
  imagem,
  isSelected,
  onClick,
}) => {
  return (
    <button
      className={`h-14 w-14 shadow-md rounded-full p-1 ${
        
        
        isSelected
          ? "bg-[#51A8FF] text-white shadow-[#D4E9FF]"
          : "bg-white text-black"
      }`}
      onClick={onClick}
    >
      <img src={imagem} alt="ibagenss" className="rounded-xl"/>
    </button>
  );
};
