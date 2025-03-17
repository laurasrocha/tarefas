"use client";
import React, { useState, useEffect } from "react";
import Header from "../_components/header";
import { BsPencilSquare } from "react-icons/bs";
import { BiTrash } from "react-icons/bi";


//criando um componente
const MinhasTarefas = () => {
    //variaveis onde esta atualizando e recebendo novas informações
    const [tarefas, setTarefas] = useState([]);

    //lidando com os efeitos colaterais do useState
    useEffect(() => {
        //com o localStorage, ele esta guardando as informações no navegador
        const tarefaSalva = JSON.parse(localStorage.getItem("tarefas")) || [];
        setTarefas(tarefaSalva);
    }, []);

    return (
        <div className="w-screen h-screen bg-[#222222]">
            <Header />

            <div className="w-full h-[500px] flex flex-col items-center p-3 mt-3 space-y-4">

                {/*se caso não houver nenhuma tarefa salva */}
                {tarefas.length === 0 ? (
                    <p className="mt-3 text-gray-500">Nenhuma Tarefa cadastrada ainda.</p>
                ) : (

                    //começando ul
                    <div className="mt-3">
                        {tarefas.map((tarefa, index) => (
                            //li
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
                                        <button className="w-[110px] h-[27px] bg-red-400 rounded-lg text-xs text-center font-sans">pendente</button>
                                    </div>
                                </div>

                                <div className="flex flex-col space-y-2">
                                    <button>
                                    <BsPencilSquare color="orange" className="sm:text-xl" />
                                    </button>
                                    <button>
                                        <BiTrash color="red" className="sm:text-xl" />
                                    </button>
                                </div>
                                 {/*li */}
                            </div>
                        ))}
                    </div> //terminando ul
                )}
            </div>
        </div>
    );
};

export default MinhasTarefas;
