"use client";

import React from 'react'
import { useState } from "react";
import { BsList } from "react-icons/bs";
import Link from 'next/link';


const Buttonn = () => {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative">
            <div className="w-[100px] h-[60px] flex items-center justify-end">
                <button onClick={() => setOpen(!open)}
                    className="sm:hidden w-[60px] h-[40px] flex justify-center p-1"><BsList size={35} className="text-white" /></button>
                {open && (
                   
                   <div className="absolute top-12 left-0 w-58 h-[300px] bg-gray-600 rounded-lg shadow-lg p-3 flex flex-col space-y-4">
                            <Link href="/pag3" 
                            className="block p-1 mt-3 hover:bg-gray-800 w-[80px] h-[30px] text-xs rounded-lg font-sans text-center">Nova Tarefa</Link>
                            <Link href="/pag2"
                             className="block p-1 hover:bg-gray-800 w-[80px] h-[30px] text-xs rounded-lg font-sans text-center">Tarefas</Link>
                            <Link href="/"
                             className="block p-1 hover:bg-gray-800 w-[80px] h-[30px] text-xs rounded-lg font-sans text-center">Sair</Link>
                   </div>
                   
                )}
            </div>
        </div>
    );
};
export default Buttonn;

