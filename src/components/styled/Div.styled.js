import styled from 'styled-components';

export const StyledDivElement = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  border-radius: 25px;
  background-color: ${(props) => props.bg || 'palevioletred'};
  width: 200px;
  height: 200px;
  transition: background-color 0.3s linear;
`;
