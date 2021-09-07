import styled from "styled-components";

interface PositionProps {
  x: number;
  y: number;
  expand: boolean;
}

interface SizeProps {
  expand: boolean;
}

export const Border = styled.div<PositionProps>`
  border: 5px solid white;
  height: 530px;
  position: absolute;
  z-index: 5;
  top: ${(props) => props.y}px;
  left: ${(props) => props.x}px;
  width: ${(props) => props.expand ? '510px' : '320px'};
  transition: left ease 1s;
`;

export const ImageItem = styled.img<SizeProps>`
  object-fit: cover;
  width: ${(props) => props.expand ? '500px' : '320px'};
  transition: width ease 0.2s;
  height: 512px;
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
`;