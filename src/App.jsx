import { useState } from 'react'
import StartGame from './components/StartGame'
import Gameplay from './components/Gameplay';

const App = () => {
  const [isGameStarted,setIsGameStarted] = useState(true);
  const toggleGamePlay = () =>{
    setIsGameStarted(prev =>!prev);
  }
  return (
    <>
    {
      isGameStarted ? <Gameplay/> :<StartGame toggle={toggleGamePlay}/> 
    }
    </>
    
  )
}

export default App