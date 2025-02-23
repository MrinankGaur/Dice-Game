import React, { useState } from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'
import RoleDice from './RoleDice'

const Gameplay = () => {
  const [score,setScore] = useState(0);
  const[selectedNumber,setSelectedNumber] = useState();
  const[currentDice,setCurrentDice]= useState(1);
  const [error,setError] = useState("");
  
  const generateRandomNumber = (min,max)=>{
    return Math.floor(Math.random()*(max-min)+min);
  };

  const rollDice = ()=>{
    const randomNumber = generateRandomNumber(1,7);
    setCurrentDice((prev)=>randomNumber);
    if(!selectedNumber){ 
      setError("You have not selected any number");
      return;
    }
    setError("");
    if(selectedNumber==randomNumber){
      setScore((prev)=>prev+randomNumber);
    }else{
      setScore((prev)=>prev-2);

    }

    setSelectedNumber(undefined);
  }

  return (
    <MainContainer>
        <div className='top_section'>
        <TotalScore score={score}/>
        <NumberSelector setError={setError} selectedNumber={selectedNumber} setSelectedNumber={setSelectedNumber} error={error}/>
        </div>
        <RoleDice currentDice={currentDice} rollDice={rollDice}/>  
    </MainContainer>
  )
}

export default Gameplay
const MainContainer = styled.main`
    padding-top: 70px;
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`