import styled from "styled-components";
import image from "../assets/boxes.png";
import Displays from "../Displays";
import payment from "../assets/payment.png";
import calculator from "../assets/calculator.png";
import delivery from "../assets/delivery.png";
import icon from "../assets/yellow.svg";
interface Props {
  openCalculator: () => void;
}
export default function Pink({ openCalculator }: Props) {
  return (
    <Section>
      <Content>
        <Left>
          <Heading>International air shipments</Heading>
          <Paragraph>We provide transportation of any difficulty item from your shipping address to the desired location, also exporting your product to worldwide locations. Spacecargo offers parcel and cargo transportation from China, America, Dubai, Turkey and Hong Kong. Postal address with room number.</Paragraph>
          <Button>Get started</Button>
        </Left>
        <Right src={image} alt="Packages" />
      </Content>
      <Boxes>
        <Box>
          <BoxIcon src={payment} alt="Payment" />
          <TextWrapper>
            <BoxTitle>Payment</BoxTitle>
            <BoxText>unit of connected speech or writing.</BoxText>
          </TextWrapper>
          <BoxButton src={icon} />
        </Box>
        <Box onClick={openCalculator}>
          <BoxIcon  src={calculator} alt="Calculator" />
          <TextWrapper>
            <BoxTitle>Calculator</BoxTitle>
            <BoxText>unit of connected speech or writing.</BoxText>
          </TextWrapper>
          <BoxButton src={icon} />
        </Box>
        <Box>
          <BoxIcon src={delivery} alt="Deliery" />
          <TextWrapper>
            <BoxTitle>Delivery</BoxTitle>
            <BoxText>unit of connected speech or writing.</BoxText>
          </TextWrapper>
          <BoxButton src={icon} />
        </Box>
      </Boxes>
    </Section>
  );
}

const Section = styled.section`
  border-radius: 0px 0px 0px 402px;
  background-color: #d72121;
  margin-top: -93.98px;
  padding-left: 110px;
  padding-top: 200px;
  padding-bottom: 136px;

  position: relative;

  @media (max-width: ${Displays.tablet}) {
    padding: 32px 24px;
    border-radius: 0px 0px 0px 350px;
    background-size: 100% 70%;
    margin-top: 0px;
  }
`;
const Content = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  @media (max-width: ${Displays.tablet}) {
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 40px;
  }
`;
const Heading = styled.h2`
  color: #fff;
  font-size: 36px;
  font-weight: 500;
  @media (max-width: ${Displays.tablet}) {
    font-size: 20px;
  }
`;
const Paragraph = styled.p`
  color: #fff;
  font-size: 20px;
  font-weight: 400;
  margin-top: 16px;
  margin-bottom: 40px;
  @media (max-width: ${Displays.tablet}) {
    font-size: 16px;
  }
`;
const Button = styled.button`
  border-radius: 12px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  padding: 16px 40px;
  white-space: nowrap;
  transition: all 0.4s;
  &:hover {
    border: 1px solid #fff;
    background-color: #fff;
    color: #da4b5c;
  }
  @media (max-width: ${Displays.tablet}) {
    padding: 12px 32px;
    font-size: 16px;
  }
`;
const Left = styled.div`
  max-width: 650px;
`;
const Right = styled.img`
  width: 500px;
  @media (max-width: 1360px) {
    width: 400px;
  }
  @media (max-width: ${Displays.tablet}) {
    max-width: 450px;
    width: 100%;
  }
`;

const Boxes = styled.div`
  display: flex;
  gap: 32px;
  justify-content: center;
  align-items: center;

  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translate(-50%, 50%);

  @media (max-width: ${Displays.tablet}) {
    width: 100%;
    padding-inline: 24px;
    bottom: -40px;
    transform: translate(-50%, 100%);
    flex-wrap: wrap;
  }
`;

const Box = styled.div`
  padding: 32px 24px;
  border-radius: 16px;
  background: #fff;
  box-shadow: 0px 4px 12px 0px rgba(0, 0, 0, 0.25);

  display: flex;
  align-items: center;
  gap: 32px;

  position: relative;

  width: 394px;
  cursor: pointer;

  @media (max-width: 1360px) {
    width: fit-content;
    flex-direction: column;
    gap: 16px;
    padding: 16px;
  }

  @media (max-width: ${Displays.tablet}) {
    gap: 16px;
    padding: 24px 32px;
    width: 262px;
    align-items: flex-start;
    aspect-ratio: 1 / 0.9;
  }
`;

const BoxIcon = styled.img`
  width: 72px;
  height: 72px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const BoxTitle = styled.p`
  color: #060707;
  font-size: 20px;
  font-weight: 500;
`;

const BoxText = styled.p`
  width: 198px;
  color: #060707;
  font-size: 16px;
  font-weight: 400;
  @media (max-width: 1360px) {
    width: 140px;
  }
`;

const BoxButton = styled.img`
  position: absolute;
  top: 34px;
  right: 24px;

  @media (max-width: 1360px) {
    display: none;
  }
  @media (max-width: ${Displays.tablet}) {
    display: block;
  }
`;
