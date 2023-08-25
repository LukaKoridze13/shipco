import styled from "styled-components";
import cart from "../assets/cart.png";
import BlackButton from "../components/BlackButton";
import tracking from "../assets/scan.svg";
import Displays from "../Displays";
export default function TrackPackage() {
  return (
    <Section>
      <Left src={cart} alt="cart" />
      <Right>
        <Title>Track a Package</Title>
        <Text>Enter tracking number to see the delivery process</Text>
        <Track>
          <Input type="text" placeholder="Tracking number" />
          <Button>Track</Button>
        </Track>
      </Right>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 260px;
  margin-top: 170px;
  @media (max-width: 1240px) {
    justify-content: space-evenly;
    gap: 50px;
  }
  @media (max-width: ${Displays.tablet}) {
    margin-top: 350px;
  }
  @media (max-width: 898px) {
    margin-top: 640px;
  }
  @media (max-width: 604px) {
    margin-top: 860px;
  }
`;

const Left = styled.img`
  width: 232px;
  @media (max-width: ${Displays.tablet}) {
    display: none;
  }
`;

const Right = styled.div`
  display: flex;
  flex-direction: column;
`;

const Title = styled.p`
  color: #000;
  font-size: 32px;
  font-weight: 400;
  margin-left: 16px;

  position: relative;

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

  @media (max-width: 645px) {
    font-size: 24px;
  }
`;

const Text = styled.p`
  color: #212121;
  font-size: 20px;
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 32px;
  @media (max-width: 645px) {
    font-size: 16px;
    width: 312px;
    margin-bottom: 24px;
    margin-top: 8px;
  }
`;

const Track = styled.div`
  display: flex;
  gap: 32px;
  align-items: center;

  @media (max-width: 645px) {
    width: 312px;
    flex-direction: column;
    gap: 12px;
  }
`;

const Input = styled.input`
  width: 430px;
  height: 56px;
  border-radius: 12px;
  border: 1px solid #000;
  color: #3e3e3e;
  font-size: 16px;
  padding-left: 44px;
  background-image: url(${tracking});
  background-repeat: no-repeat;
  background-position-x: 12px;
  background-position-y: center;
  &::placeholder {
    color: #6f6f6f;
    font-size: 14px;
    font-weight: 400;
  }
  @media (max-width: 645px) {
    width: 100%;
  }
`;

const Button = styled(BlackButton)`
  @media (max-width: 645px) {
    width: 100%;
  }
`;
