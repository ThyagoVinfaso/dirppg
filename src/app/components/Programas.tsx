'use client'
import { SetStateAction, useState } from 'react';


export default function CardComponent() {
  const [selectedCard, setSelectedCard] = useState <number>();

  // Função para alterar o card selecionado
  const handleCardClick = (index: number) => {
    setSelectedCard(index);
  };

  return (
    <div className="flex items-center w-screen absolute bottom-[-20px]">
      <div className="flex m-auto w-[40vw] h-[8vw] bg-cinzaquente">

        <button
          className={`w-[25%] h-[100%] ${selectedCard === 0 ? 'bg-yellow-500' : 'bg-cinzaquente'} text-[2vh] hover:scale-110 transition-transform duration-300 hover:bg-yellow-500`}
          onClick={() => handleCardClick(0)}
        ><p>PPGTI</p></button>
        
        <button
          className={`w-[25%] h-[100%] ${selectedCard === 1 ? 'bg-yellow-500' : 'bg-cinzaquente'} text-[2vh] hover:scale-110 transition-transform duration-300 hover:bg-yellow-500`}
          onClick={() => handleCardClick(1)}
        ><p>PPGBIOTEC</p></button>
        
        <button
          className={`w-[25%] h-[100%] ${selectedCard === 2 ? 'bg-yellow-500' : 'bg-cinzaquente'} text-[2vh] hover:scale-110 transition-transform duration-300 hover:bg-yellow-500`}
          onClick={() => handleCardClick(2)}
        ><p>PPGSIS</p></button>
        
        <button
          className={`w-[25%] h-[100%] ${selectedCard === 3 ? 'bg-yellow-500' : 'bg-cinzaquente'} text-[2vh] hover:scale-110 transition-transform duration-300 hover:bg-yellow-500`}
          onClick={() => handleCardClick(3)}
        ><p>PPGZO</p></button>

      </div>
    </div>
  );
}
