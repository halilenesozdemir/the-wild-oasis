import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";

const H1 = styled.h1`
  font-size: 30px;
  font-weight: 600;
  background-color: yellow;
`;

const StyledApp = styled.main`
  background-color: orangered;
  padding: 20px;
`;

const GreenButton = styled(Button)`
  color: green;
  background-color: purple;
`;

const ReversedButton = (props) => (
  <Button {...props} children={props.children.split("").reverse()} />
);

function App() {
  return (
    <>
      <GlobalStyles />
      <StyledApp>
        <H1>The Wild Oasis</H1>
        <Button onClick={() => alert("check in")}>Check in</Button>
        <Button onClick={() => alert("check out")}>Check out</Button>
        {/* <Button>Click me</Button>
        <Button primary>Click me</Button>
        <Button>Halil Enes Özdemir</Button>
        <Button as={ReversedButton} primary>
          Halil Enes Özdemir
        </Button>
        <GreenButton>Hellü</GreenButton> */}
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
