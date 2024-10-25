import styled from "styled-components";
import { GlobalStyles } from "./styles/GlobalStyles";
import { Button } from "./ui/Button";
import { Input } from "./ui/Input";
import { Heading } from "./ui/Heading";
import { Row } from "./ui/Row";

const StyledApp = styled.main`
  /* background-color: orangered; */
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
        <Row>
          <Row type="horizontal">
            <Heading as="h1">The Wild Oasis</Heading>
            <div>
              <Heading as="h2">Check in and Out </Heading>
              <Button onClick={() => alert("check in")}>Check in</Button>
              <Button
                variation="danger"
                size="large"
                onClick={() => alert("check out")}
              >
                Check out
              </Button>
            </div>
          </Row>
          {/* <Button>Click me</Button>
        <Button primary>Click me</Button>
        <Button>Halil Enes Özdemir</Button>
        <Button as={ReversedButton} primary>
          Halil Enes Özdemir
        </Button>
        <GreenButton>Hellü</GreenButton> */}
          <Row>
            <Heading as="h3">Forms</Heading>
            <form>
              <Input type="number" placeholder="Number of guests" />
              <Input type="number" placeholder="Number of guests" />
            </form>
          </Row>
        </Row>
      </StyledApp>
    </>
  );
}

export default App;
