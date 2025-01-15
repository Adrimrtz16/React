import './App.css';
import Contador from './componentes/Contador';
import Contador2 from './componentes/Contador2';
import Colores from './componentes/Colores';
import Colores2 from './componentes/Colores2';
import Colores3 from './componentes/Colores3';
import Contador3 from './componentes/Contador3';
import Contador4 from './componentes/Contador4';
import Reloj from './componentes/Reloj';
import misTemas from './mocks/mock-misTemas';
import Unidad from './componentes/Unidad';
import Subunidad from './componentes/Subunidad';
import Total from './componentes/Total';

function App() {
    
    function mostrarTemario(tema) {
        return (
            <div key={tema.id}>
                <ul>
                    <Unidad tema={tema}></Unidad>
                    <ol>
                        {tema.parts.map(mostrarSubunidad)}
                    </ol>
                    <Total tema={tema}></Total>
                </ul>
                
                
                
            </div>
        )
    }

    function mostrarSubunidad(subunidad) {
        return <Subunidad key={subunidad.id} subunidad={subunidad}></Subunidad>
    }

    return (
        <div>
            {/* <Colores2></Colores2> */}
            {/* <Colores3></Colores3> */}
            {/* <Reloj></Reloj> */}
            {misTemas.map(mostrarTemario)}

        </div>
    )
}

export default App;