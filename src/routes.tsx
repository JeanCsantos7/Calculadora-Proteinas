import { BrowserRouter, Route, Routes } from "react-router-dom"
import { useState } from "react"
import CalculadoraProteinas from "./App"
import Calculadora from "./components/Calculadora"

export default function Rotas()
{


     const[massa, setMassa] = useState<number>(0)
     
   
     function calcularMassa(valorUsuario: number)
     {
      setMassa(valorUsuario*1.5)
     }
 

 


     


     



    return(

    <BrowserRouter>
     <Routes>
      
      <Route path="/" element= {<CalculadoraProteinas kilograma={calcularMassa}/>}></Route>
      <Route path="/Calculadora" element= {<Calculadora peso={massa}/>}></Route>

     </Routes>
    
    </BrowserRouter>

    )
}