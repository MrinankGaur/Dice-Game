import styled from "styled-components";
export const Button = styled.button`
   padding: 10px 18px;
   color: white;
   background: black ;
   border-radius: 5px;
   min-width: 220px;
   border: none;
   font-size: 16px;
   transition: 0.3s ease-in;
   cursor: pointer;
   border: 1px solid transparent;
   &:hover{
    background-color: #ffffff;
    border: 1px solid black;
    color: black;
   }
`;

export const OutlineButton = styled(Button)`
   background-color: white;
   color: black;
   border: 1px solid black;
   &:hover{
    background-color: black;
    border: 1px solid transparent;
    color: white;
   }
`;