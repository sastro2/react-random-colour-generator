import { useState } from 'react';
import { StyledButtonElement } from './components/styled/Button.styled';
import { StyledContainer } from './components/styled/Container.styled';
import { StyledDivElement } from './components/styled/Div.styled';
import { randomColor } from './logic/randomColour';

function App() {
  const [color, setColor] = useState(randomColor());

  const onClick = () => {
    setColor(randomColor());
  };

  return (
    <StyledContainer>
      <StyledButtonElement onClick={onClick}>Generate</StyledButtonElement>
      <StyledDivElement bg={color}>
        Generated Color: <br />
        {color}
      </StyledDivElement>
    </StyledContainer>
  );
}

export default App;
