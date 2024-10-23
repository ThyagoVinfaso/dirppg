import Image from "next/image"
import usuario from '../../../public/assets/usericon.png'

export default function Eventos() {

    return (

        <div className="flex flex-col w-[70vw] mx-auto mt-[-60vh]">
            <p className="mx-auto text-[4vh] border-b-2 border-t-2 text-yellow-600">Eventos <span className="text-white">recentes</span></p>

            <div className="flex flex-col w-[70vw] bg-cinzatexto mx-auto mt-[16vh]">

                <h1 className="mx-[10%] text-[2.8vh] mt-[2vh] text-yellow-600" >Evento 1</h1>
                <p className="mx-[10%] text-[2vh]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <div className=" flex mt-[4vh] h-[60%] w-[80%] bg-slate-400 mx-auto justify-center items-center">
                    <p className="py-[6vh]"> IMAGEM</p>
                </div>
                <a className="mx-[10%] mt-[2vh] mb-[2vh] text-yellow-600" href="https://www.youtube.com/watch?v=av2CL4nusg4">link do evento</a>


                <h1 className="mx-[10%] text-[2.8vh] mt-[2vh] text-yellow-600" >Evento 2</h1>
                <p className="mx-[10%] text-[2vh]">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum</p>
                <div className=" flex mt-[4vh] h-[60%] w-[80%] bg-slate-400 mx-auto justify-center items-center">
                    <p className="py-[6vh]"> IMAGEM</p>
                </div>
                <a className="mx-[10%] mt-[2vh] mb-[2vh] text-yellow-600" href="https://www.youtube.com/watch?v=av2CL4nusg4">link do evento</a>
            </div>
        </div>





    )
}