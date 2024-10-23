import Image from 'next/image'
import BG2 from "../../../public/assets/BG2.png";

export default function Sobre(){



    return(

        <div className="flex flex-col w-[30vw] justify-center items-center mt-[18vh] mx-auto">
            <h1 className='text-[5vh]'><span className='text-yellow-500'>Olá,</span> nós somos</h1>
            <h1 className='text-[6vh] text-yellow-500 border-b-2 border-t-2 mb-[2vh]'>DIRPPG-DV</h1>
            <p className='text-[2vh]'>A Diretoria de Pesquisa e Pós-Graduação  é responsável  por planejar coordenar e supervisionar a execução de atividades relacionadas à pesquisa e ao ensino da pós-graduação, conforme as políticas da Pró-Reitoria de Pesquisa e Pós-Graduação</p>
            <button className='w-[8vw] h-[2vw] bg-yellow-500 rounded-md font-medium text-[0.8vw] mt-[2vh]'><p>EQUIPE DIRPPG</p></button>        
        </div>

    )



}