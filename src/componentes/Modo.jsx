import React, { useContext } from "react";
import TemaContext from "../context/temaContext";

const Modo = () => {

    const tema = useContext(TemaContext);

    return (
        <p>{tema.mode}</p>
    );

}

export default Modo;