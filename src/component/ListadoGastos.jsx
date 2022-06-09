import React from 'react'
import Gasto from './Gasto'

const ListadoGastos = ({gastos}) => { //Captura los gastos por props desde componente padre App.jsx
  return (
    <div className='listado-gastos contenedor'>
      <h2>{gastos.length ? 'Gastos' : 'No hay gastos'} </h2>
      
      {/* .map se ejecuta para recorrer el arreglo  */}
      {gastos.map( gasto => (
        <Gasto 
        key={gasto.id}
        gasto={gasto}
        
        />
      )) }
    </div>
  )
}

export default ListadoGastos