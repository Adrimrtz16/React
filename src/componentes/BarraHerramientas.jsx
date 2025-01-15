import React from "react";
import BotonTema from "./BotonTema";

const BarraHerramientas = () => {

    return (
        <div>
            <BotonTema texto="Archivo"></BotonTema>
            <BotonTema texto="Editar"></BotonTema>
            <BotonTema texto="Terminar"></BotonTema>
        </div>
    )
}

export default BarraHerramientas;