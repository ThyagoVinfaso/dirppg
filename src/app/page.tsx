import Image from "next/image";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Programas from "./components/Programas";
import Sobre from "./components/Sobre";
import Noticias from "./components/Noticias";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <>
      <div className="bg-DIRPPG min-h-screen bg-center bg-cover relative">
        <Navbar pagina={2}></Navbar>
        <Sobre></Sobre>
      </div>
      <div>
        <Background></Background>
        <Programas />
        <div className="bg-BG2  h-[50vh] bg-center bg-cover relative"></div>
        <Noticias></Noticias></div>

    <div><Footer></Footer></div>
 




    </>
  );
}
