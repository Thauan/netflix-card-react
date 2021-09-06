import styled from "styled-components";

interface PositionProps {
  x: number;
  y: number;
}

export const Border = styled.div<PositionProps>`
  border: 5px solid white;
  width: 350px;
  height: 545px;
  position: absolute;
  z-index: 5;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  transition: left ease 1s;
`;