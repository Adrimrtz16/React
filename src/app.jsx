import './App.css';
import Contador from './componentes/Contador';
import Contador2 from './componentes/Contador2';
import Colores from './componentes/Colores';
import Colores2 from './componentes/Colores2';
import Contador3 from './componentes/Contador3';
import Contador4 from './componentes/Contador4';

function App() {
    return (
        <div>
            <Contador4 contador={10}></Contador4>
        </div>
    )
}

export default App;