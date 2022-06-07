import {useState} from 'react'
import Mensaje from './Mensaje'

const NuevoPresupuesto = ({
  presupuesto, 
  setPresupuesto, 
  setisValidPresupuesto}) => {

  const [mensaje, setMensaje] = useState('')

  //Definir una funcion para controlar que el acceso sea numero mayor a 0
  const handlePresupuesto = (e) => {
    e.preventDefault()

    if(!presupuesto || presupuesto < 0 ){ //Si no es un numero
      setMensaje('No es un presupuesto valido')
      return
    } 
    
    setMensaje('')
    setisValidPresupuesto(true)

  }

  return (
    <div className='contenedor-presupuesto contenedor sombra'>

      <form onSubmit={handlePresupuesto} className='formulario'> {/*Cuando precione elboton de submit se ejecuta la funcion handlePresupuesto */}
        <div className='campo'>
          <label Definir Presupuesto></label>

          <input 
            className='nuevo-presupuesto'
            type='Number'
            placeholder ='Añade tu presupuesto' 
            value = {presupuesto}   
            //Para capturar el valor del formulario
            onChange={  e => setPresupuesto(Number(e.target.value))}   // Con esto el value presupuesto toma el valor digitado   
          />

          <input type="submit" value='Añadir'/>  {/*Cuando precione elboton de submit se ejecuta la funcion handlePresupuesto */}

          {mensaje && <Mensaje tipo='error'>{mensaje}</Mensaje>}

        </div>
      </form>
    </div>
  )
}

export default NuevoPresupuesto