import { styled } from "styled-components";
import usa from "../assets/usa.png";
import arrowdown from "../assets/arrowdown.svg";
import BlackButton from "../components/BlackButton";
import TextButton from "../components/TextButton";
import { useNavigate } from "react-router";

interface Props {
  opened: boolean;
  openLogin: () => void;
  openCalculator: () => void;
}

export default function Menu({ opened, openLogin, openCalculator }: Props) {
  const navigate = useNavigate();
  return (
    <Wrapper $opened={opened}>
      <Content $opened={opened}>
        <Wrap>
          <Navigation>
            <Item>Home</Item>
            <Item>About us</Item>
            <Item onClick={openCalculator}>Calculator</Item>
            <Item>Shop</Item>
            <Item>Services and prices</Item>
            <Item>FAQs</Item>
            <Item>Contact</Item>
            <Item>Terms</Item>
          </Navigation>
          <Language>
            <img src={usa} alt="usa flag" />
            <span>EN</span>
            <img src={arrowdown} alt="arrow down" />
          </Language>
        </Wrap>
        <Button onClick={openLogin}>Log in</Button>
        <Register
          onClick={() => {
            navigate("/register");
          }}
        >
          Registration
        </Register>
      </Content>
    </Wrapper>
  );
}

const Wrapper = styled.div<{ $opened: boolean }>`
  position: fixed;
  z-index: 9;
  top: 0;
  left: 0;

  width: 100%;
  height: 100dvh;
  padding-top: 65.29px;

  opacity: ${(props) => (props.$opened ? "1" : "0")};
  pointer-events: ${(props) => (props.$opened ? "all" : "none")};

  background: rgba(0, 0, 0, 0.45);
`;

const Content = styled.div<{ $opened: boolean }>`
  width: 100%;
  border-radius: 0px 0px 16px 16px;
  background: #f9f9f9;
  box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
  padding-bottom: 32px;
  margin-top: ${(props) => (props.$opened ? "0" : "-100%")};
  transition: all 0.4s;
`;

const Wrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  margin-bottom: 16px;

  padding: 32px 24px;
`;

const Navigation = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Item = styled.p`
  color: #060707;
  font-size: 16px;
  font-weight: 400;
`;

const Language = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const Button = styled(BlackButton)`
  width: calc(100% - 24px);
  margin-inline: auto;
  display: block;
`;

const Register = styled(TextButton)`
  margin-inline: auto;
  display: block;
  margin-top: 16px;
`;
