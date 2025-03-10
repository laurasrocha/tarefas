import React from 'react';
import Header from '../_components/header';

export default function page() {
  return (
    <div className="w-screen h-screen bg-[#121212]">
      <Header/>

      <div className="w-full h-[500px] flex justify-center items-center">
      
        <div className="w-[280px] h-[290px] bg-slate-300 space-y-3 flex flex-col items-center rounded-xl p-3">
            <input className="w-[260px] h-[30px] border-2 border-blue-400 rounded-lg text-xs p-2 text-black" placeholder="Título da Tarefa"/>
            <textarea className="w-[260px] h-[130px] rounded-lg text-xs text-black p-2" placeholder="Digite a Descrição da Tarefa"></textarea>
            <button className="w-[260px] h-[30px] bg-black text-white text-sm font-sans rounded-lg">Inserir Tarefa</button>
            <button className="w-[260px] h-[30px] bg-red-800 text-white text-sm font-sans rounded-lg">Cancelar</button>
       </div>
      </div>
    </div>
  )
}
