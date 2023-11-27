import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Gretter} from './componentes/greeter';
import {Gretter2} from './componentes/greeter2';
import {Empleado} from './componentes/empleado';
import {Fruta}  from './componentes/fruta';

const frutas = ["manzana","mango","piña"];

function App() {
  const [count, setCount] = useState(0)

  return (
    
      <div className='conatiner'>
        <Fruta fru={frutas}/>
      </div>
      
  );
}

export default App
