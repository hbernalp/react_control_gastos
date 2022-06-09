import React from 'react'
import {
  LeadingActions,
  SwipeableList,
  SwipeableListItem,
  SwipeAction,
  TrailingActions,
} from 'react-swipeable-list'
import 'react-swipeable-list/dist/styles.css';

import { formatearFecha } from '../helpers'
import IconoAhorro from '../img/icono_ahorro.svg'
import IconoCasa from '../img/icono_casa.svg'
import IconoComida from '../img/icono_comida.svg'
import IconoGastos from '../img/icono_gastos.svg'
import IconoOcio from '../img/icono_ocio.svg'
import IconoSalud from '../img/icono_salud.svg'
import IconoSuscripciones from '../img/icono_suscripciones.svg'

//Creando un diccionario de iconos
const diccionarioIconos = {
 ahorro: IconoAhorro,
 casa: IconoCasa,
 comida: IconoComida,
 gastos: IconoGastos,
 ocio: IconoOcio,
 salud: IconoSalud,                    
 suscripciones: IconoSuscripciones
}

const Gasto = ({gasto, setGastoEditar}) => { //traigo la prop gasto desde el componente listado gastos, para poderlo utilizar
  
  //Realizando estructuring para obtener los datos de arreglo
  const { categoria, nombre, cantidad, id, fecha} = gasto

  //Funcion para el movimiento de la la derecha que edita el gasto
  const leadingActions = () =>( //<-- al cambiar el corchete por parentesis, significa que trae un return
    <LeadingActions>
      <SwipeAction onClick={() => setGastoEditar(gasto)}>
        Editar

      </SwipeAction>
    </LeadingActions>
  )

  //Funcion para el movimiento de la la derecha que elimine el gasto
  const trailingActions = () =>(
    <TrailingActions>
      <SwipeAction onClick={() => console.info('Eliminando...')}>
        Eliminar
      </SwipeAction>
    </TrailingActions>
  )
  
    return (
    <SwipeableList>
      <SwipeableListItem
        leadingActions={leadingActions()}//hace el movimiento de la izquierda
        trailingActions={trailingActions()}//hace el movimineto a la derecha
      >
        <div className='gasto sombra'>
          <div className='contenido-gasto'>
            {/* Agregar Imagen */}
            <img src={diccionarioIconos[categoria]} alt="Icono Gasto" />
            
            <div className='descripcion-gasto'>
              <p className='categoria'>{categoria}</p>
              <p className='nombre-gasto'>{nombre}</p>
              <p className='fecha-gasto'>Agregado el: {''}<span>{formatearFecha(fecha)}</span></p>
            </div>
          </div>
            <p className='cantidad-gasto'>$ {cantidad}</p>
        </div>
      </SwipeableListItem>
    </SwipeableList>

  )
}

export default Gasto