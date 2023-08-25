import { styled } from "styled-components";
import phone from "../assets/phone.svg";
import message from "../assets/message.svg";
import facebook from "../assets/facebook.svg";
import linkedin from "../assets/linkedin.svg";
import instagram from "../assets/instagram.svg";
import logo from "../assets/shipco.png";
import Displays from "../Displays";
export default function Footer() {
  return (
    <Wrapper>
      <Img src={logo} alt="Shipco logo" />
      <Div>
        <Title>Navigation</Title>
        <Item>Home</Item>
        <Item>About us</Item>
        <Item>FAQs</Item>
        <Item>Contact</Item>
      </Div>
      <Div>
        <Title>Service</Title>
        <Item>Calculator</Item>
        <Item>Shop</Item>
        <Item>Services</Item>
        <Item>Prices</Item>
      </Div>
      <Div>
        <Title>Contact us</Title>
        <Item>
          <img src={phone} alt="Phone" />
          +995 552 342 657
        </Item>
        <Item>
          <img src={message} alt="Message" />
          shipping@gmail.com
        </Item>
        <Item style={{ gap: "16px" }}>
          <img src={facebook} alt="Facebook" />
          <img src={linkedin} alt="linkedin" />
          <img src={instagram} alt="instagram" />
        </Item>
      </Div>
    </Wrapper>
  );
}

const Wrapper = styled.section`
  width: 100%;
  max-width: 1440px;
  margin: 0 auto;
  padding: 72px;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: 710px) {
    padding: 24px;
  }

  @media (max-width: 530px) {
    justify-content: space-around;
    row-gap: 30px;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    padding: 24px;
    align-items: flex-start;
    gap: 32px;
  }
`;

const Title = styled.p`
  color: #000;
  font-size: 24px;
  font-weight: 500;

  margin-bottom: 32px;

  position: relative;
  margin-left: 12px;

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: -12px;
    width: 4px;
    height: 24px;
    background: #ffc80a;
    transform: translate(-100%, -50%);
  }

  @media (max-width: 480px) {
    margin-bottom: 16px;
    font-size: 20px;
  }
`;

const Item = styled.p`
  color: #060707;
  font-size: 20px;
  font-weight: 400;
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  gap: 8px;
  &:last-child {
    margin-bottom: 0px;
  }
  @media (max-width: 480px) {
    margin-bottom: 10px;
    font-size: 16px;
  }
`;

const Div = styled.div`
  @media (max-width: 480px) {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: first baseline;
  }
`;

const Img = styled.img`
  width: 200px;
  @media (max-width: ${Displays.tablet}) {
    display: none;
  }
  
  @media (max-width: 480px) {
    display: block;
  }
`;
