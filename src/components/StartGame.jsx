import styled from 'styled-components'



const StartGame = ({toggle}) => {
  return (
    <Conatainer>
        <div>
        <img src="/images/dices.png" alt="dices" />
        </div>
        <div className='content'>
          <h1>DICE GAME</h1>
          <Button
          onClick={toggle}
          >Play Now</Button>
        </div>
    </Conatainer>
  )
}

export default StartGame;

const Conatainer = styled.div`
    max-width: 1180px;
    height: 100vh;
    display: flex;
    margin: 0 auto;
    align-items: center;
    .content {
      h1{
        font-size: 96px;
        white-space: nowrap;
      }
    }
`;
const Button = styled.button`
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