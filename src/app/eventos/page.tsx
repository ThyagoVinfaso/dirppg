import Image from "next/image";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Eventos from "../components/Eventos";

export default function Home() {
  return (
    <>
      <div className="bg-DIRPPG min-h-screen bg-center bg-cover">
        <Navbar pagina={0}></Navbar>
       
      </div>
      <Eventos></Eventos>

    <div><Footer></Footer></div>
 




    </>
  );
}