import { useState } from 'react'
import Header from './component/Header'

function App() {

  //Definicion del state para el nuevo presupuesto
  const [presupuesto, setPresupuesto] = useState(0)
  //Definicion del sytate para validar si hay presupuesto valido
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false)

  return (
    
    <div>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}

      isValidPresupuesto={isValidPresupuesto}
      setisValidPresupuesto={setisValidPresupuesto}
      
      />
    </div>
  )
}

export default App
