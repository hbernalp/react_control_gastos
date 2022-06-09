import { useState } from 'react'
import Mensaje from './Mensaje'
import CerrarBtn from '../img/cerrar.svg'

const Modal = ({setModal, animarModal, setAnimarModal, guardarGasto}) => {

    //useState de validacion de los campos
    const [mensaje, setMensaje] = useState('')

    //creando los useState de los campos del formulario
    const [nombre, setNombre ] = useState('')
    const [cantidad, setCantidad ] = useState('')
    const [categoria, setCategoria ] = useState('')

    const ocultarModal =() =>{
        setModal(false)
        setAnimarModal(false)

        setTimeout(() => {
            setAnimarModal(false)
          },500)
    }

    const handleSubmit = e =>{// pasamos un evento con la letra e
        e.preventDefault()//para evitar que se envie el formuario

        if([ nombre, cantidad, categoria ].includes('')) { //Revisa si alguno de los campos esta vacio ( if para averificarlo), el includes verifica por cada campo que esta en el arreglo
            setMensaje('Todos los campos son obligatorios')

            setTimeout(() => {
                setMensaje('')
                
            }, 1000)
            return

        }

        guardarGasto({nombre, cantidad, categoria})
        

    }


  return (
    <div className='modal '>
      <div className="cerrar-modal">
          <img 
            src={CerrarBtn} 
            alt="Close" 
            onClick={ocultarModal}
            />
        </div>

        <form 
            //Registrando un evento en el formulario
            onSubmit={handleSubmit}
            className={`formulario ${animarModal ? "animar" : 'cerrar'}`}>

            <legend>Nuevo Gasto</legend>

            {/*Cuando mensaje tenga algo entonces && cargar el componente de mensaje*/}
            {mensaje && <Mensaje tipo="error">{mensaje}</Mensaje>}

           
            <div className='campo'>
                <label htmlFor="nombre">Nombre del Gasto</label>
                <input 
                    id="nombre"
                    type="text" 
                    placeholder="Añade el nombre del gasto"
                    value={nombre} //Captura el valor que tiene la variable nombre del useState
                    onChange={e => setNombre(e.target.value)} //Asociar el evento que va a ir actualizando el state (Variabe nombre), cada vez que el usuario va escribiendo algo en el frm en el campo nombre
                />
            </div>

            <div className='campo'>
                <label htmlFor="cantidad">Cantidad</label>
                <input 
                    id="cantidad"
                    type="number" 
                    placeholder="Añade la cantidad"
                    value={cantidad}
                    onChange = {e => setCantidad(Number(e.target.value))}
                />
            </div>

            <div className='campo'>
                <label htmlFor="categoria">Categoria</label>
                <select id="categoria"
                    value={categoria}
                    onChange ={e => setCategoria(e.target.value)}
                >
                    <option value="">-- Seleccione --</option>
                    <option value="ahorro">Ahorro</option>
                    <option value="casa">Casa</option>
                    <option value="comida">Comida</option>
                    <option value="ocio">Ocio</option>
                    <option value="ocio">Salud</option>                    
                    <option value="suscripciones">Suscripciones</option>
                </select>
                

            </div>
            <input 
                type="submit" 
                value="Añadir Gasto"
            />


        </form>
    </div>
  );
}

export default Modal;
