import React from 'react'
import { BsList } from "react-icons/bs";


export default function Header() {
    return (
        <div className="w-screen h-[60px] bg-blue-600 flex items-center justify-between p-2">
            <h1 className="text-white font-sans font-semibold text-xs">Minhas Tarefas</h1>
            <div className="w-[100px] h-[60px] flex items-center justify-end">
                <button className="w-[60px] h-[40px] flex justify-center p-1"><BsList size={35} className="text-white" /></button>
            </div>
        </div>
    )
}
