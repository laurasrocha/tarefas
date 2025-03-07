import Image from "next/image";
import { FaCalendarCheck } from "react-icons/fa";


export default function page() {
    return (
        <div className="w-screenn h-screen flex flex-col space-y-12">
            <div className="w-full h-[60px] flex items-center justify-between p-2">

                <div className="flex space-x-2 mt-3">
                    <h1 className="font-mono font-semibold">TAREFAS</h1>
                    <h2><FaCalendarCheck size={20} color="red" /></h2>
                </div>

                <button className="w-[100px] h-[35px] bg-black text-xs font-sans rounded-2xl border border-white mt-2">Entrar</button>
            </div>
            <div className="w-full h-[400px] flex items-center justify-center flex-col space-y-8">
                <div>
                    <Image
                        src="/icons1.svg"
                        alt="img1"
                        width={270}
                        height={100}
                    />
                </div>
                <div className="w-[250px] h-[60px]">
                    <h1 className="text-white text-center font-sans">Sistema feito para você organizar seus estudos e tarefas</h1>
                </div>
            </div>
            <div className="w-full h-[80px] flex items-end justify-center">
                <h1 className="text-lg font-sans">2025</h1>
            </div>

        </div>
    );
}
