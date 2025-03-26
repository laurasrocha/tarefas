import Image from "next/image";
import Link from "next/link";
import { FaCalendarCheck } from "react-icons/fa";


export default function page() {
    return (
        <div className="bg-[#222222] w-screen h-screen flex flex-col space-y-12 sm:rounded sm:shadow-md">

            <div className="w-full h-[60px] flex items-center justify-between sm:justify-around sm:space-x-16 p-2">

                <div className="flex space-x-2 mt-3">
                    <h1 className="font-sans font-bold sm:text-lg">TAREFAS</h1>
                    <h2><FaCalendarCheck size={20} color="red" /></h2>
                </div>

                <Link href="/pag2"
                 className="block text-center p-2 sm:p-1 w-[100px] h-[35px] text-xs sm:text-sm font-sans rounded-2xl border border-white mt-2 sm:font-semibold">Entrar</Link>
           
            </div>
            <div className="w-full h-[400px] sm:h-[600px] flex items-center justify-center flex-col space-y-8">
                <div className="sm:w-[400px] sm:h-[300px]">
                    <Image
                        src="/icons1.svg"
                        alt="img1"
                        width={270}
                        height={100}
                        className="sm:w-[400px] sm:h-[300px]"
                    />
                </div>
                <div className="w-[250px] h-[60px] sm:w-[350px] sm:h-[80px]">
                    <h1 className="text-white text-center font-sans sm:text-lg sm:font-semibold">Sistema feito para você organizar seus estudos e tarefas</h1>
                </div>
            </div>
            <div className="w-full h-[80px] flex items-end sm:items-center justify-center">
                <h1 className="text-lg font-sans sm:font-semibold">2025</h1>
            </div>
        </div>

    );
}
