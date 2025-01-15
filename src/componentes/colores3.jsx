import React, { useReducer } from 'react';

const Colores3 = () => {

    const [colores, setColores] = useReducer(reducer,{
        rojo : 0,
        amarillo : 0,
        verde : 0
    });

    const total = colores.rojo + colores.amarillo + colores.verde;

    function reducer(estado,accion) {

        switch(accion.type){
            case 'incrementarRojo':
                return {rojo: estado.rojo+1}
            case 'incrementarAmarillo':
                return {amarillo: estado.amarillo+1}
            case 'incrementarVerde':
                return {verde: estado.verde+1}
        }

    }

    function incrementarRojo(){
        setColores({type: 'incrementarRojo'})
    }

    function incrementarAmarillo(){
        setColores({type: 'incrementarAmarillo'})
    }

    function incrementarVerde(){
        setColores({type: 'incrementarVerde'})
    }

    return(
        <div>
            <button className='rojo' onClick={incrementarRojo}>Rojo</button>
            <button className='amarillo' onClick={incrementarAmarillo}>Amarillo</button>
            <button className='verde' onClick={incrementarVerde}>Verde</button>
           
            <p>Veces pulsado rojo: {colores.rojo}</p>
            <p>Veces pulsado amarillo: {colores.amarillo}</p>
            <p>Veces pulsado verde: {colores.verde}</p>
            
            <p>Total de pulsaciones {total}</p>
            <p>Porcentaje rojo {Math.trunc((colores.rojo/total)*100)}%</p>
            <p>Porcentaje amarillo {Math.trunc((colores.amarillo/total)*100)}%</p>
            <p>Porcentaje verde {Math.trunc((colores.verde/total)*100)}%</p>
        </div>
    )
}

export default Colores3;