import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Heading } from "./ui/Heading";

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
        <Heading as="h1">The Wild Oasis</Heading>
        <Heading as="h2">Check in and Out </Heading>
        <Button onClick={() => alert("check in")}>Check in</Button>
        <Button onClick={() => alert("check out")}>Check out</Button>
        {/* <Button>Click me</Button>
        <Button primary>Click me</Button>
        <Button>Halil Enes Özdemir</Button>
        <Button as={ReversedButton} primary>
          Halil Enes Özdemir
        </Button>
        <GreenButton>Hellü</GreenButton> */}
        <Heading as="h3">Forms</Heading>
        <Input type="number" placeholder="Number of guests" />
      </StyledApp>
    </>
  );
}

export default App;
