import styled from "styled-components";

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(12, auto);
  gap: 30px;
  position: relative;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 15px;
  padding: 20px;
  width: 84%;
  margin: 8%;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  color: white;
  text-align: center;
  font-size: 32px;

   @media (max-width: 768px) {
    grid-template-columns: 1fr; 
    grid-template-rows: repeat(12, auto);
    width: 95%; 
    gap: 20px;
    font-size: 28px; 
  }

  @media (max-width: 480px) {
    font-size: 24px; 
    padding: 15px; 
    gap: 15px; 
  }
`;

export default MainContainer;
