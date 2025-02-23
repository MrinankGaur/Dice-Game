import { useState } from "react";
import styled from "styled-components"

const NumberSelector = ({setError,error,selectedNumber,setSelectedNumber}) => {
    const numberSelectorHandler =(value)=>{
        setSelectedNumber(value);
        setError("")
    }
    const arrNumber = [1,2,3,4,5,6];
    return (
    <NumberSelectorContainert>
        <p className="error">
            {error}
        </p>
        <div className="flex">
        {
            arrNumber.map((value,i)=>(
                <Box 
                isSelected={
                    value==selectedNumber
                }
                key={i} onClick={()=>numberSelectorHandler(value)}>
                        {value}
                </Box>
        ))}
        </div>
        <p>Select Number</p>
    </NumberSelectorContainert>

  );
}

export default NumberSelector

const NumberSelectorContainert = styled.div`
    display: flex;
    flex-direction: column;
    align-items: end;
    .flex{
        display: flex;
        gap: 24px
    }
    p{
        font-size: 24px;
        font-weight: 700;
    }
    .error{
        color: red;
    }
`
const Box = styled.div`
    width: 72px;
    height: 72px;
    border:1px solid black;
    display: grid;
    place-items: center;
    font-size:24px;
    font-weight: 700;
    background-color: ${(props)=>props.isSelected?"black":"white"};
    color: ${(props)=>props.isSelected?"white":"black"};
    cursor: pointer;
`