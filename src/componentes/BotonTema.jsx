import React, { useContext } from "react";
import TemaContext from "../context/temaContext";

const BotonTema = (props) => {

    const tema = useContext(TemaContext);

    return (
        <button style={{background: tema.background, color: tema.foreground}}>
            {props.texto}
        </button>
    )
}

export default BotonTema;