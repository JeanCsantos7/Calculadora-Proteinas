import { ReactNode, useState } from "react";
import { useNavigate } from "react-router-dom";

import Logotipo from "../src/assets/Logotipo.png";
import Loader from "../src/components/Loader";



interface pegarKGProps{
  kilograma: (valorUsuario: number) => void;

  
}










export default function CalculadoraProteinas( {kilograma} : pegarKGProps) {
  const [loader, setLoader] = useState<string | ReactNode>("");



  const navigate = useNavigate();

  const Calculadora = (): void => {
    
  

   
        setTimeout(() => {
          navigate("/Calculadora");
        }, 2000);
        setLoader(<Loader />);

      

    

   
  };


  function pegarDado(e: React.ChangeEvent<HTMLInputElement>)
  {
    const valorDigitado = parseFloat(e.target.value)
    kilograma(valorDigitado)
  




   
   
     

   

 
      
 
      
    
     
   





  }







  return (
    <>
      <img className="Logotipo" src={Logotipo} alt="" />
     

     <div className="inputs">
     <input  type="number" placeholder="Informe sua altura aqui"   />
     <input onChange={pegarDado} type="number" placeholder="Informe seu Peso aqui" required />
     </div>
    
   
     
      <button className="Botao" onClick={Calculadora}>Calcular</button>
      
 
      <p>{loader}</p>
    
      
      
     
  
   
     
  
    </>
  );
}
