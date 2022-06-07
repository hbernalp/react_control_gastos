import { useState } from 'react'
import Header from './component/Header'
import IconNewCost from './img/nuevo-gasto.svg'
import { generateId } from './helpers'
import Modal from './component/Modal'

function App() {

  //Definicion del state para el nuevo presupuesto
  const [presupuesto, setPresupuesto] = useState(0)
  //Definicion del state para validar si hay presupuesto valido
  const [isValidPresupuesto, setisValidPresupuesto] = useState(false)
  //Creando el State para la modal
  const[modal,setModal] = useState(false)
  //creando el Hook para hacer la transicion automaticamente del formulario en la modal
  const[animarModal, setAnimarModal] = useState(false)
  //Creando el hook para gastos
  const [gastos, setGastos] = useState([])

  //funcion para crear un nuevo presupuesto desde la modal
  const handleNuevoPresupuesto = ()=>{
    setModal(true) //cambia el state a true

    setTimeout(() => {  //muestra la modal despues de 1 segundo
        setAnimarModal(true)
    }, 500);
  }


  const guardarGasto = gasto => {
    gasto.id = generateId()
    setGastos=([...gastos, gasto])
  }

  return (
    
    <div>
      <Header
      presupuesto={presupuesto}
      setPresupuesto={setPresupuesto}

      isValidPresupuesto={isValidPresupuesto}
      setisValidPresupuesto={setisValidPresupuesto}
      
      />

      {/*Aqui estoy permitiendo que se ingrese un presupuesto valido, al cargarlo muestra el boton de nuevo presupuesto*/}
      {isValidPresupuesto  && ( //Si el presupuesto es valido
        <div className='nuevo-gasto'>
        <img 
          src={IconNewCost} 
          alt="Create New Cost" 
          onClick={handleNuevoPresupuesto} //Onclick hace el llamado al evento de traer el componente NuevoPresupuesto
        />

      </div>
      )}
      
      {/*activando la carga de la ventana modal */}
      {modal && <Modal 
                  setModal={setModal}
                  animarModal={animarModal}
                  setAnimarModal={setAnimarModal}
                  guardarGasto={guardarGasto}//prop para traer la operacion de la funcion
                /> }

    </div>
  )
}

export default App
