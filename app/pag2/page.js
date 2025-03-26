"use client";
import React, { useState, useEffect } from "react";
import Header from "../_components/header";
import { BiTrash } from "react-icons/bi";

const MinhasTarefas = () => {
    const [tarefas, setTarefas] = useState([]);

    useEffect(() => {
        const tarefaSalva = JSON.parse(localStorage.getItem("tarefas")) || [];
        setTarefas(tarefaSalva);
    }, []);
    
    const removerTarefa = (index) => {
        const novasTarefas = tarefas.filter((_, i) => i !== index);
        setTarefas(novasTarefas);
        localStorage.setItem("tarefas", JSON.stringify(novasTarefas));
    };

    const alternarStatus = (index) => {
        const novasTarefas = tarefas.map((tarefa, i) => 
            i === index ? { ...tarefa, concluida: !tarefa.concluida } : tarefa
        );
        setTarefas(novasTarefas);
        localStorage.setItem("tarefas", JSON.stringify(novasTarefas));
    };

    return (
        <div className="w-screen h-screen bg-[#222222]">
            <Header />

            <div className="w-full h-[500px] flex flex-col items-center p-3 mt-3 space-y-4">
                {tarefas.length === 0 ? (
                    <p className="mt-3 text-gray-500">Nenhuma Tarefa cadastrada ainda.</p>
                ) : (
                    <div className="mt-3">
                        {tarefas.map((tarefa, index) => (
                            <div key={index} className="w-[280px] h-[90px] sm:w-[70vw] sm:h-[120px] space-x-2 bg-slate-100 flex justify-between rounded-lg p-4 mb-2">
                                <div className="sm:w-[65vw] h-[70px]">
                                    <div className="space-y-1 sm:space-y-3">
                                        <div className="flex space-x-1">
                                            <label className="text-blue-400 text-xs font-sans sm:text-sm">Título:</label>
                                            <input 
                                                className="text-black text-xs font-semibold font-sans bg-transparent focus:ring-2 focus:ring-transparent outline-none sm:w-[900px] sm:h-[20px]"
                                                value={tarefa.titulo} 
                                                readOnly 
                                            />
                                        </div>
                                        <div className="flex space-x-1">
                                            <label className="text-blue-400 text-xs font-sans sm:text-sm">Descrição:</label>
                                            <input 
                                                className="text-black text-xs font-semibold font-sans bg-transparent focus:ring focus:ring-transparent outline-none sm:w-[900px] sm:h-[20px]"
                                                value={tarefa.descricao} 
                                                readOnly 
                                            />
                                        </div>
                                        <button 
                                            className={`w-[110px] h-[27px] rounded-lg text-xs text-center font-sans ${
                                                tarefa.concluida ? "bg-green-400" : "bg-red-400"
                                            }`} 
                                            onClick={() => alternarStatus(index)}
                                        >
                                            {tarefa.concluida ? "Concluída" : "Pendente"}
                                        </button>
                                    </div>
                                </div>

                                <div className="flex flex-col">
                                    <button onClick={() => removerTarefa(index)}>
                                        <BiTrash color="red" className="sm:text-xl" />
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default MinhasTarefas;
