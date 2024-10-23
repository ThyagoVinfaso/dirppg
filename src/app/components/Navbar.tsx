'use client'
import Image from "next/image";
import { request } from 'http';
import React, { useRef, useEffect, useState } from 'react';

import instagram from "../../../public/assets/instagram.png";
import facebook from "../../../public/assets/facebook.png";

export default function Navbar({ pagina }: { pagina: number }) {

    const indicadorRef = useRef<HTMLDivElement>(null);
    const navItems = Array(5).fill(null).map(() => useRef<HTMLButtonElement>(null));
    const [selectedIndex, setSelectedIndex] = useState(pagina);

    useEffect(() => {
        setTimeout(() => {
            moveIndicator(pagina);
        }, 150);
    }, [pagina]);

    const moveIndicator = (index: number) => {
        const button = navItems[index].current;
        const indicator = indicadorRef.current;

        if (button && indicator) {
            const buttonWidth = button.offsetWidth;
            const offsetLeft = button.offsetLeft;

            // Aplica as dimensões e a posição à barrinha com transição suave
            indicator.style.width = `${buttonWidth}px`;
            indicator.style.left = `${offsetLeft}px`;
        }
    };

    const handleClick = (index: number) => {
        setSelectedIndex(index); // Atualiza o índice do botão clicado
        moveIndicator(index);
        setTimeout(() => {

            if (index === 4) {
                document.location.href = '/pos';
            } else if (index === 3) {
                document.location.href = '/equipe';
            } else if (index === 2) {
                document.location.href = '/';
            } else if (index === 1) {
                document.location.href = '/editais';
            } else if (index === 0) {
                document.location.href = '/eventos';
            }
        }, 400);
    };

    return (
        <div className="w-[80vw] pt-[4vh] m-auto">
            <div className="flex flex-row w-[80vw] m-auto mb-[1vh] justify-between">
                <p className='font-bold text-[5vh] ml-[6vw]'>DIRPPG-DV</p>
                <div className="flex flex-row ">
                    <Image className="h-[6vh] w-[6vh] justify-end mr-[2vw]" alt="instagram" width={720} height={720} src={instagram} />
                    <Image className="h-[6vh] w-[6vh] justify-end mr-[5vw]" alt="facebook" width={720} height={720} src={facebook} />
                </div>
            </div>

            <div className="relative">
                {/* Barrinha indicadora que se move */}
                <div ref={indicadorRef} id="indicator"
                    className="absolute top-[-5px] h-1 bg-yellow-500
                    transition-all duration-[500ms] ease-in-out">
                </div>

                {/* Lista de itens do menu */}
                <ul className="flex justify-around divide-x divide-cinzento">
                    <li className='w-full flex justify-center'>
                        <button
                            onClick={() => handleClick(0)}
                            ref={navItems[0]}
                            className={`text-center nav-item ${selectedIndex === 0 ? 'text-yellow-500' : 'text-white'} text-[2vh]`}
                        >
                            Eventos
                        </button>
                    </li>
                    <li className='w-full flex justify-center'>
                        <button
                            onClick={() => handleClick(1)}
                            ref={navItems[1]}
                            className={`text-center nav-item ${selectedIndex === 1 ? 'text-yellow-500' : 'text-white'} text-[2vh]`}
                        >
                            Editais
                        </button>
                    </li>
                    <li className='w-full flex justify-center'>
                        <button
                            onClick={() => handleClick(2)}
                            ref={navItems[2]}
                            className={`text-center nav-item ${selectedIndex === 2 ? 'text-yellow-500' : 'text-white'} text-[2vh]`}
                        >
                            Home
                        </button>
                    </li>
                    <li className='w-full flex justify-center'>
                        <button
                            onClick={() => handleClick(3)}
                            ref={navItems[3]}
                            className={`text-center nav-item ${selectedIndex === 3 ? 'text-yellow-500' : 'text-white'} text-[2vh]`}
                        >
                            Equipe
                        </button>
                    </li>
                    <li className='w-full flex justify-center'>
                        <button
                            onClick={() => handleClick(4)}
                            ref={navItems[4]}
                            className={`text-center nav-item ${selectedIndex === 4 ? 'text-yellow-500' : 'text-white'} text-[2vh]`}
                        >
                            Pós graduação
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    );
}
