import styled from "styled-components";

interface PositionProps {
  x: number;
  y: number;
  expand: boolean;
}

export const Border = styled.div<PositionProps>`
  border: 5px solid white;
  height: 515px;
  position: absolute;
  z-index: 5;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  width: ${(props) => props.expand ? '500px' : '320px'};
  transition: left ease 500ms, width 300ms ease 100ms;
`;


export const Item = styled.div`
  margin: 1rem;
`;


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  overflow: hidden;
  min-height: 100vh;
  padding: 0 0.5rem;
  justify-content: center;
  align-items: center;
  height: 100vh;
  transform: scale(0.9);
  width: min-content;
`;