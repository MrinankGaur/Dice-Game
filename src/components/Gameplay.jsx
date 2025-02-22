import React from 'react'
import TotalScore from './TotalScore'
import NumberSelector from './NumberSelector'
import styled from 'styled-components'

const Gameplay = () => {
  return (
    <MainContainer>
        <div className='top_section'>
        <TotalScore/>
        <NumberSelector/>
        </div>  
    </MainContainer>
  )
}

export default Gameplay
const MainContainer = styled.main`
    .top_section{
        display: flex;
        justify-content: space-around;
        align-items: end;
    }
`