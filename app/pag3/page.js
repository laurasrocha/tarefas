"use client";
import React from 'react';
import Header from '../_components/header';
import { useState, useEffect } from "react";

const AdicionarTarefa = () => {
  const [titulo, setTitulo] = useState("");
  const [descricao, setDescricao] = useState("");

  const adicionarTarefa = () => {
    if(!titulo) return alert("Preencha o título!");

    const novaTarefa = { titulo, descricao, status: "pendente" };
    const tarefaSalva = JSON.parse(localStorage.getItem("tarefas")) || [];
 
    const novasTarefas = [...tarefaSalva, novaTarefa];
    localStorage.setItem("tarefas", JSON.stringify(novasTarefas));

    setTitulo("");
    setDescricao("");

    alert("Tarefa adicionada com sucesso!");
  };
  
  return (
    <div className="w-screen h-screen bg-[#1E1E1E]">
      <Header/>

      <div className="w-full h-[500px] sm:h-[600px] flex justify-center items-center sm:space-y-12">
      
        <div className="w-[280px] h-[290px] sm:w-[550px] sm:h-[400px] sm:border-2 border-blue-400 space-y-3 flex flex-col items-center rounded-xl p-3 sm:space-y-3 sm:p-5">
            <input 
            type="text" value={titulo} onChange={(e) => setTitulo(e.target.value)}
            className="block w-[260px] h-[30px] sm:w-[520px] sm:h-[40px] border-2 border-blue-400 rounded-lg text-xs p-2 text-black focus:ring-2 focus:ring-blue-300 outline-none" placeholder="Título da Tarefa"/>
            
            <textarea
            value={descricao} onChange={(e) => setDescricao(e.target.value)}
             className="w-[260px] h-[130px] sm:w-[520px] sm:h-[200px] rounded-lg text-xs border-2 border-blue-400  text-black p-2  focus:ring-2 focus:ring-blue-300 outline-none" placeholder="Digite a Descrição da Tarefa"></textarea>
            
            <button onClick={adicionarTarefa} 
            className="w-[260px] h-[30px] sm:w-[520px] sm:h-[40px] bg-blue-800 text-white text-sm font-sans rounded-lg sm:font-semibold">Inserir Tarefa</button>
            <button className="w-[260px] h-[30px] sm:w-[520px] sm:h-[40px] bg-red-600 text-white text-sm font-sans rounded-lg sm:font-semibold">Cancelar</button>
       </div>
      </div>
    </div>
  );
};

export default AdicionarTarefa;
