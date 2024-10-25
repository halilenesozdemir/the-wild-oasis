import styled from "styled-components";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const Button = styled.button`
  font-size: 1.4rem;
  font-weight: 500;
  border: none;
  border-radius: 7px;
  padding: 1.2rem 1.6rem;
  background-color: purple;
  color: white;
  margin: 20px;
  cursor: pointer;
`;

const Input = styled.input`
  border: 1px solid #ddd;
  border-radius: 5px;
  padding: 0.8rem 1.2rem;
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

function App() {
  return (
    <StyledApp>
      <H1>The Wild Oasis</H1>
      <Button onClick={() => alert("check in")}>Check in</Button>
      <Button onClick={() => alert("check out")}>Check out</Button>

      <Input type="number" placeholder="Number of guests" />
    </StyledApp>
  );
}

export default App;
