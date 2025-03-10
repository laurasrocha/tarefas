import React from 'react';
import Header from '../_components/header';

export default function page() {
    return (
        <div className="w-screen h-screen bg-slate-400">
            <Header />
            <div className="w-full h-[500px] flex flex-col items-center p-2 mt-3">
                <div className="w-[280px] h-[90px] bg-slate-100 rounded-lg p-2">

                    <div className="space-y-2">
                        <div className="flex space-x-1">
                            <label className="text-blue-400 text-xs font-sans">Título:</label>
                            <label className="text-black text-xs font-semibold font-sans">Testando</label>
                        </div>
                        <div className="flex space-x-1">
                            <label className="text-blue-400 text-xs font-sans">Descrição:</label>
                            <label className="text-black text-xs font-semibold font-sans">Testando</label>
                        </div>
                        <button className="w-[110px] h-[27px] bg-red-400 rounded-lg text-xs text-center font-sans">pendente</button>
                    </div>

                </div>
            </div>
        </div>
    )
}
