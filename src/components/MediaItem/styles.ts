import styled from "styled-components";

interface SizeProps {
  expand: boolean;
}

export const ImageItem = styled.img<SizeProps>`
  object-fit: cover;
  width: ${(props) => (props.expand ? "500px" : "320px")};
  transition: width ease 500ms;
  height: 512px;
`;

export const Item = styled.div`
`;
