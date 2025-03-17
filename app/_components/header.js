import React from 'react'
import Link from 'next/link';
import Buttonn from './buttonn';

export default function Header() {

    return (
        <div className="w-screen h-[45px] bg-gray-600 flex items-center justify-between p-1">
            <h1 className="text-white font-sans font-semibold text-xs sm:text-sm">Minhas Tarefas</h1>
           <Buttonn/>
            <div className="hidden sm:flex sm:w-[320px] sm:h-[30px] space-x-2">
                <Link href="/pag3"
                 className="block w-[110px] h-[25px] text-center p-1 bg-white text-black rounded-lg text-xs font-sans">Nova Tarefa</Link>
                <Link href="/pag2" 
                className="block w-[110px] h-[25px] text-center p-1 bg-white text-black rounded-lg text-xs font-sans">Minhas Tarefas</Link>
                <Link href="/"
                 className="block w-[80px] h-[25px] text-center p-1 bg-white text-black rounded-lg text-xs font-sans">Sair</Link>
            </div>
        </div>
    )
}
