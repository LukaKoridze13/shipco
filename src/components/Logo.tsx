import { styled } from "styled-components";
import image from "../assets/shipco.png";
import Displays from "../Displays";
export default function Logo() {
  return <Img src={image} alt="Shipco Logo" />;
}

const Img = styled.img`
  width: 200px;
  @media (max-width: ${Displays.tablet}) {
    width: 90px;
  }
`;
