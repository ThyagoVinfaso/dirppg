import Background from "@/app/components/Background";
import Footer from "@/app/components/Footer";
import Navbar from "@/app/components/Navbar";
import Contatos from "../components/Contatos";

export default function Home() {
    return (
      <>
        <div className="bg-DIRPPG min-h-screen bg-center bg-cover">
          <Navbar></Navbar>
        </div>
       
      <Contatos></Contatos>
      <div><Footer></Footer></div>
   
  
  
  
  
      </>
    );
  }
  