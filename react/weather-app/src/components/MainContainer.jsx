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
  width: 85%;
  margin: 0 auto;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  backdrop-filter: blur(10px);
  color: white;
  text-align: center;
  top: 20vh;
`;

export default MainContainer;
