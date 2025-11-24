import { useState } from 'react'
import './App.css'

function App() {
  const [numero, setNumero] = useState(0)
  const [contador,setContador] = useState(0)
  
  
  return(
    <>
    <h1>Contador com Incremento Personalizado</h1>
    <h2>Contador : {contador}</h2>
     <input type="number" value={numero} onChange={e => setNumero(Number(e.target.value))}/>
    
    <button onClick={() => setContador(contador + numero)}>Somar</button>

    <button onClick={() => {setContador(0)}}>Zerar</button>
    
    
    </>
  )
  
}

export default App
