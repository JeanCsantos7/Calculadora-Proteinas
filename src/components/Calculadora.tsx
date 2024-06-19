


interface Medida{
    peso: number
 
}


export default function Calculadora({peso} : Medida)
{
 
    return(
        <>
         <h1 className="texto">Você precisa consumir {peso}g de proteinas</h1>
        </>
    )

}