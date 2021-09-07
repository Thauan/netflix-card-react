import styled from "styled-components";

interface SizeProps {
  expand: boolean;
}

export const Video = styled.video<SizeProps>`
  object-fit: cover;
  width: ${(props) => props.expand ? "500px" : "320px"};
  transition: width ease 900ms;
  height: 512px;
  `;
  // border: 2px solid red;
