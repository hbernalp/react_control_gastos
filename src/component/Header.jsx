import React from "react";
import NuevoPresupuesto from "./NuevoPresupuesto";

const Header = ({
  presupuesto,
  setPresupuesto,
  isValidPresupuesto,
  setisValidPresupuesto
}) => {
  return (
    <header>
      <h1>Agenda de Gastos</h1>

      {isValidPresupuesto ? (
          <p>Control Presupuesto</p>
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
