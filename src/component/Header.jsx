import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";
import ControlPresupuesto from "./ControlPresupuesto";

const Header = ({
  gastos,
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setisValidPresupuesto
}) => {
  return (
    <header>
      <h1>Agenda de Gastos</h1>

      {isValidPresupuesto ? (
          <ControlPresupuesto 
            gastos={gastos}
            presupuesto={presupuesto}
          
          /> //Coloca el valor de lo que trae el componente ControlPresupuesto
        ) : (
          <NuevoPresupuesto
            presupuesto={presupuesto}
            setPresupuesto={setPresupuesto}
            setisValidPresupuesto={setisValidPresupuesto}
          />
        )
      }
    </header>
  );
};

export default Header;
