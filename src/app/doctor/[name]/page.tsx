"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";

import Diasedias from "@/components/calendario";
import { Horas } from "@/components/horarios";
import { Medical } from "@/types/doctorTypes";
import { useParams } from "next/navigation";
import { fetchMedByName } from "@/function/doctorFunctions";
import DoctorSkeleton from "@/components/DoctorSkeleton/page";
import { getNome } from "@/components/calendario/index";


export default function Doctors() {
  const [medicalData, setMedicalData] = useState<Medical | null>(null);
  const { name } = useParams();

  const [selectedDia, setSelectedDia] = useState<string | null>(null);
  const [selectedHora, setSelectedHora] = useState<string | null>(null);

  useEffect(() => {
    async function fetchDoctor() {
      try {
        if (name && typeof name === "string" && name.trim() !== "") {
          const data = await fetchMedByName(name.trim()); // Busca os dados
          setMedicalData(data); // Salva os dados no estado
        } else {
          throw new Error("O nome do médico é inválido ou está vazio.");
        }
      } catch (err: any) {
        console.error(err.message);
      }
    }

    fetchDoctor();
  }, [name]);

  // Renderiza o Skeleton enquanto os dados estão sendo carregados
  if (!medicalData) {
    return <DoctorSkeleton />;
  }

  // Renderiza os detalhes do médico quando os dados estão disponíveis
  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      {/* Header */}
      <div className="flex py-4 p-6 justify-between">
        <div className="flex shadow-xl rounded-xl bg-white items-center">
          <Link href="/" className="size-10 p-3 ">
            <img src="/icons/vorrrta.png" alt="Seta volta" className="w-5" />
          </Link>
        </div>

        <div className="flex font-bold text-lg text-black mt-2">
          <h4>Detalhes do médico</h4>
        </div>

        <div className="w-10"></div>
      </div>

      {/* Detalhes do Médico */}
      <div className="max-w pr-4 pt-4 pl-4 font-bold">
        <div className="flex max-w px-4 rounded-lg">
          <img
            src={medicalData.avatar_url}
            alt={medicalData.name}
            className="w-24 rounded-2xl"
          />
          <div className="ml-4">
            <h3 className="text-lg text-black font-bold">{medicalData.name}</h3>
            <p className="text-gray-500">{medicalData.specializations}</p>
            <p className="text-gray-500 mt-1 flex items-center">
              ⭐ {medicalData.score}
            </p>
          </div>
        </div>

        <div className="flex max-w text-gray-500 pt-4 pl-4 pr-6">
          <ul className="text-lg">
            Bibliografia
            <li className="text-base pt-3">{medicalData.biography}</li>
          </ul>
        </div>

        <div className="pt-4 pl-4">
          <h3 className="text-lg font-semibold text-gray-500">Espacializações</h3>

          <div className="flex gap-2 mt-2">
            <a className="text-sm text-gray-500">
              {" "}
              <u>Dental Surgeon</u>
            </a>

            <a className="text-sm text-gray-500">
              <u>Aesthetic Surgeon</u>
            </a>

            <a className="text-sm text-gray-500">
              <u>General Dentist</u>
            </a>
          </div>
        </div>
      </div>

      {/* Agendamento */}
      {/* Calendário */}
      <div className="px-8 pt-4 ">
        <h3 className="text-black font-bold text-2xl">Calendário</h3>
        <div className="flex pt-3 justify-between">
          
          
          
          {["14", "15", "16", "17"].map((dia) => (
            <Diasedias
              key={dia}
              nome={getNome(dia)}
              dia={dia}
              px={""}
              isSelected={selectedDia === dia}
              onClick={() => {
                setSelectedDia(dia);
                setSelectedHora(null);
              }}
            />
          ))}
        </div>
      </div>

      <div className="flex flex-col">
        {/* Horários */}
        <div className="px-8 pt-4 pb-16">
          <h3 className="text-black font-bold text-2xl pt-3">Horários</h3>
          <div className="flex pt-3 justify-between ">
            {["11:00 AM", "03:00 PM", "06:00 PM"].map((texto) => (
              <Horas
                key={texto}
                texto={texto}
                isSelected={selectedHora === texto}
                onClick={() => setSelectedHora(texto)}
              />
            ))}
          </div>
        </div>

        {/* Botão */}
        <div className="justify-center pb-4 items-center flex">
          <div className="bg-[#51A8FF] shadow-lg shadow-[#D4E9FF] px-20 rounded-full py-4 max-w-96 transition-all duration-200 hover:bg-[#3992f8]">
            <h2 className="text-center text-xl font-bold text-white">
              Agendar Consulta
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
