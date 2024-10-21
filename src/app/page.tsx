import Image from "next/image";
import Navbar from "./components/Navbar";
import Background from "./components/Background";
import Programas from "./components/Programas";

export default function Home() {
  return (
    <>
      <div className="bg-DIRPPG min-h-screen bg-center bg-cover relative">
        <Navbar></Navbar>
      </div>
      <Background></Background>
      <Programas />
    </>
  );
}
