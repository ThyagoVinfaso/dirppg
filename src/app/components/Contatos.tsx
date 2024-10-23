import Image from "next/image"
import usuario from '../../../public/assets/usericon.png'

export default function Contatos() {

    return (

        <div className="flex flex-col w-[70vw] h-auto mx-auto mt-[-60vh]">
            <p className="mx-auto text-[4vh] border-b-2 border-t-2">Conheça a nossa <span className="text-yellow-500">equipe</span></p>
            <div className="flex flex-col h-[100vh] w-[70vw] bg-cinzatexto mx-auto mt-[16vh]">
                <div className="h-[25%] w-full mt-[3vh]">
                    <div className="flex flex-row h-full w-full">
                        <Image className="w-[20%] h-[80%] object-contain mt-[1%]" src={usuario} alt={"user"} width={720} height={720}></Image>
                        <div className="flex flex-col ml-[2vw] mt-[5vh]">
                            <p className="text-yellow-500 text-[2.2vh] mb-[1vh]" >Função</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">Nome</span>: Pedro Lorem Ipsum</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">E-mail</span>: loremipsum@gmail.com</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">Telefone</span>: (12) 1234-5678</p>
                        </div>
                    </div>
                </div>


                <div className="h-[25%] w-full">
                    <div className="flex flex-row h-full w-full">
                        <Image className="w-[20%] h-[80%] object-contain mt-[1%]" src={usuario} alt={"user"} width={720} height={720}></Image>
                        <div className="flex flex-col ml-[2vw] mt-[5vh]">
                            <p className="text-yellow-500 text-[2.2vh] mb-[1vh]" >Função</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">Nome</span>: Pedro Lorem Ipsum</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">E-mail</span>: loremipsum@gmail.com</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">Telefone</span>: (12) 1234-5678</p>
                        </div>
                    </div>
                </div>


                <div className="h-[25%] w-full">
                    <div className="flex flex-row h-full w-full">
                        <Image className="w-[20%] h-[80%] object-contain mt-[1%]" src={usuario} alt={"user"} width={720} height={720}></Image>
                        <div className="flex flex-col ml-[2vw] mt-[5vh]">
                            <p className="text-yellow-500 text-[2.2vh] mb-[1vh]" >Função</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">Nome</span>: Pedro Lorem Ipsum</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">E-mail</span>: loremipsum@gmail.com</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">Telefone</span>: (12) 1234-5678</p>
                        </div>
                    </div>
                </div>


                <div className="h-[25%] w-full">
                    <div className="flex flex-row h-full w-full">
                        <Image className="w-[20%] h-[80%] object-contain mt-[1%]" src={usuario} alt={"user"} width={720} height={720}></Image>
                        <div className="flex flex-col ml-[2vw] mt-[5vh]">
                            <p className="text-yellow-500 text-[2.2vh] mb-[1vh]" >Função</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">Nome</span>: Pedro Lorem Ipsum</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">E-mail</span>: loremipsum@gmail.com</p>
                            <p className="text-[2vh]"><span className="text-yellow-500">Telefone</span>: (12) 1234-5678</p>
                        </div>
                    </div>
                </div>
                <div className="h-[6vh] w-[70vw]">
                    <p className="text-yellow-600">
                        <a href="https://www.utfpr.edu.br/institucional/quem-e-quem">Portfólios</a>
                    </p>
                    <p className="text-yellow-600">
                        <a href="https://www.utfpr.edu.br/pesquisa-e-pos-graduacao/grupos-de-pesquisa">Pós graduação</a>
                    </p>
                </div>

            </div>
        </div>
    )

}