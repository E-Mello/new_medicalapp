"use client";

import CardMedico from "@/components/card";
import { BotoesCategorias } from "@/components/categorias";
import { fetchMedicalData } from "@/function/doctorFunctions";
import { fetchCategoriasData } from "@/function/categoryFunctions";

import Link from "next/link";

import { useEffect, useState } from "react";
import { Medical } from "@/types/doctorTypes";
import { Categorias } from "@/types/categoryTypes";

export default function Home() {
  const [medicalData, setMedicalData] = useState<Medical[]>([]); // Estado para armazenar os dados
  const [categoriasData, setCategoriasData] = useState<Categorias[]>([]);
  const [selectedCategorias, setSelectedCategorias] =
    useState<Categorias | null>(null);

  useEffect(() => {
    async function loadCategoriasData() {
      try {
        const data = await fetchCategoriasData();
        setCategoriasData(data.data);
      } catch (error) {
        console.error("erro ao buscar os dados:", error);
      }
    }
    loadCategoriasData();
  }, []);

  useEffect(() => {
    async function loadMedicalData() {
      try {
        const data = await fetchMedicalData(); // Busca os dados do serviço
        console.warn("Dados retornados:", data); // Exibe os dados no console
        setMedicalData(data.data); // Atualiza o estado com os dados retornados
      } catch (error) {
        console.error("Erro ao buscar os dados:", error); // Exibe o erro no console, se houver
      }
    }

    loadMedicalData(); // Chama a função ao montar o componente
  }, []); // O array vazio garante que o efeito rode apenas uma vez

  // Função para filtrar médicos com base na categoria selecionada
  const filteredMedicalData = selectedCategorias
    ? medicalData.filter(
        (medical) => medical.category_id === selectedCategorias.id
      )
    : medicalData;

  return (
    <div className="min-h-screen bg-[#f7f7f7]">
      <div className="bg-[#51A8FF] text-white p-6 pt-16 pb-8 relative">
        <div className="flex justify-between">
          <p className="text-lg pt-4">Olá, João</p>
          <div className="flex top-16 right-6 bg-[#63b1ff] py-3 px-4 rounded-2xl">
            <img
              src="/icons/notification.png"
              alt="Notificação"
              className="w-6"
            />
          </div>
        </div>
      </div>
      <h1 className="text-3xl font-bold mt-3 mb-8 ">
        Vamos encontrar
        <br />
        seu melhor médico!
      </h1>
      <div className="mt-4 relative">
        <button className="absolute top-1 right-1 p-3">
          <img src="/icons/lupa.png" alt="Pesquisa" />
        </button>
        <input
          type="text"
          placeholder="Procure aqui..."
          className="w-full px-3 py-4 rounded-full border focus:outline-none text-black"
        />
      </div>
      <div className="px-8 pb-6 pt-4">
        <h2 className="font-poppins text-xl text-black mb-4">Categorias</h2>
        <div className="flex pt-3 justify-between">
          {categoriasData.length > 0 ? (
            categoriasData.map((categoria) => (
              <BotoesCategorias
                key={categoria.id}
                imagem={categoria.icon_url}
                isSelected={selectedCategorias?.id === categoria.id}
                onClick={() => {
                  console.log("Categoria selecionada:", categoria);
                  setSelectedCategorias(categoria);
                }}
              />
            ))
          ) : (
            <div className=" flex justify-between gap-7">
              <button className="flex h-14 w-14 rounded-full shadow-md bg-gray-300 animate-pulse"></button>
              <button className="flex h-14 w-14 rounded-full shadow-md bg-gray-300 animate-pulse"></button>
              <button className="flex h-14 w-14 rounded-full shadow-md bg-gray-300 animate-pulse"></button>
              <button className="flex h-14 w-14 rounded-full shadow-md bg-gray-300 animate-pulse"></button>
            </div>
          )}
        </div>
      </div>

      <div className="max-w-[90vw] mx-auto pb-24">
        {filteredMedicalData.length > 0 ? (
          filteredMedicalData.map((medical) => (
            <Link href={"/doctor/" + medical.name} key={medical.name}>
              <CardMedico
                doctorname={medical.name}
                imagem={medical.avatar_url || "/icons/doctor1.png"}
                especialidade={medical.biography}
                avaliacao={medical.score}
              />
            </Link>
          ))
        ) : (
          <div className="max-w-[90vw] mx-auto  pb-24">
            <div className="bg-gray-300 animate-pulse rounded-2xl mb-6 flex items-center p-3  shadow-sm h-36"></div>
            <div className="bg-gray-300 animate-pulse flex items-center rounded-2xl mb-6 p-3  shadow-sm h-36"></div>
            <div className="bg-gray-300 animate-pulse flex items-center p-3  rounded-2xl mb-6 shadow-sm h-36"></div>
          </div>
        )}
      </div>

      <div className="fixed bottom-0 left-0 h-24 w-full bg-white p-6 flex justify-around">
        <button>
          <img src="/icons/home.png" alt="home" />
        </button>
        <button>
          <img src="/icons/calendario.png" alt="calendar" />
        </button>
        <button>
          <img src="/icons/chat.png" alt="user" />
        </button>
        <button>
          <img src="/icons/account.png" alt="user" />
        </button>
      </div>
    </div>
  );
}
