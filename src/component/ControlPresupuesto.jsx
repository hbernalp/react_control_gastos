import { useState, useEffect } from "react";


export const ControlPresupuesto = ({ gastos, presupuesto }) => {

  const [disponible, setDisponible] = useState(0)
  const [gastado, setGastado] = useState(0)

  useEffect(() => {
    //Para poder hacer un calculo de un arreglo se debe utilizar .reduce ya que este permite acumular muchos objetos dentro de una variabla
    const totalGasto = gastos.reduce((total, gasto) => gasto.cantidad + total, 0)
    //hallando el disponible
    const totalDisponible = presupuesto - totalGasto

    //Mostrando lo gastado y el Disponible
    setGastado(totalGasto)
    setDisponible(totalDisponible)
    
  }, [gastos])

 
    //Funcion para formatear el valor digitado
  const formatearCantidad = (cantidad) => {

    return cantidad.toLocaleString("en-US", {
      style: "currency",
      currency: "USD"
    })
  }

  return (
    <div className="contenedor-presupuesto contenedor sombra dos-columnas">
      <div>
        <p>El Grafico va aqui</p>
      </div>

      <div className="contenido-presupuesto">
        <p>
          <span>Presupuesto: </span> {formatearCantidad(presupuesto)} 
        </p>
        <p>
          <span>Disponible: </span> {formatearCantidad(disponible)} 
        </p>
        <p>
          <span>Gastado: </span> {formatearCantidad(gastado)} 
        </p>
      </div>
    </div>
  );
};

export default ControlPresupuesto;
