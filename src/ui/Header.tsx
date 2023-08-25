import styled from "styled-components";
import Logo from "../components/Logo";
import phone from "../assets/phone.svg";
import usa from "../assets/usa.png";
import arrowdown from "../assets/arrowdown.svg";
import BlackButton from "../components/BlackButton";
import TextButton from "../components/TextButton";
import FlexWrapper from "../components/FlexWrapper";
import Displays from "../Displays";
import menu from "../assets/menu.svg";
import close from "../assets/close.svg";
import { useEffect, useState } from "react";

interface Props {
  menuOpened: boolean;
  handleClick: () => void;
  openLogin: () => void;
  openRegister: () => void;

}

export default function Header({ handleClick, menuOpened, openLogin, openRegister }: Props) {
  const [color, setColor] = useState("rgba(255, 255, 255, 0.25)");
  const [border, setBorder] = useState("2px solid #f9f9f9");
  const [shadow, setShadow] = useState("none");

  const imageSource = menuOpened ? close : menu;

  const handleScroll = () => {
    if (color === "rgba(255, 255, 255, 0.25)") {
      setColor("#f9f9f9");
      setBorder("2px solid #dbdbdb");
      setShadow("0px 4px 4px 0px rgba(0, 0, 0, 0.20)");
    } else {
      if (window.scrollY === 0) {
        setColor("rgba(255, 255, 255, 0.25)");
        setBorder("2px solid #f9f9f9");
        setShadow("none");
      }
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [color]);
  return (
    <HeaderWrapper>
      <HeaderPart $border={border}>
        <Logo />
        <MainNavigation>
          <MainNavItem>Home</MainNavItem>
          <MainNavItem>About us</MainNavItem>
          <MainNavItem>FAQs</MainNavItem>
          <MainNavItem>Contact</MainNavItem>
          <MainNavItem>Terms</MainNavItem>
          <MainNavItem>
            <img src={phone} alt="phone icon" />
            <span>+995 552 342 657</span>
          </MainNavItem>
          <MainNavItem>
            <img src={usa} alt="usa flag" />
            <span>EN</span>
            <img src={arrowdown} alt="arrow down" />
          </MainNavItem>
        </MainNavigation>
        <Menu src={imageSource} alt="Menu Icon" onClick={handleClick} />
      </HeaderPart>
      <HeaderPartPink $color={color} $shadow={shadow}>
        <SecondaryNav>
          <SecondaryNavItem>Calculator</SecondaryNavItem>
          <SecondaryNavItem>Shop</SecondaryNavItem>
          <SecondaryNavItem>Services and prices</SecondaryNavItem>
        </SecondaryNav>
        <FlexWrapper>
          <BlackButton onClick={openLogin}>Login</BlackButton>
          <TextButton onClick={openRegister}>Register</TextButton>
        </FlexWrapper>
      </HeaderPartPink>
    </HeaderWrapper>
  );
}

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
`;
const HeaderPart = styled.div<{ $border?: string }>`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;

  padding: 24px 72px;
  background: #f9f9f9;
  transition: all 0.3s;

  border-bottom: ${(props) => props.$border};

  @media (max-width: ${Displays.tablet}) {
    padding: 16px 24px;
    border-bottom: none;
  }
`;

const HeaderPartPink = styled(HeaderPart)<{ $color: string; $shadow: string }>`
  background: ${(props) => props.$color};
  transition: all 0.3s;
  box-shadow: ${(props) => props.$shadow};
  @media (max-width: ${Displays.tablet}) {
    display: none;
  }
`;

const MainNavigation = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;

  @media (max-width: ${Displays.tablet}) {
    display: none;
  }
`;

const MainNavItem = styled.span`
  color: #060707;
  font-size: 20px;
  font-weight: 400;
  cursor: pointer;

  display: flex;
  gap: 8px;
  align-items: center;

  position: relative;
  &::after {
    content: "";
    position: absolute;
    top: 26px;
    left: 0px;
    width: 0%;
    height: 2px;
    background: #a91e22;
    transition: all 0.3s;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
  &:nth-child(6):hover {
    &::after {
      width: 0;
    }
  }
  &:nth-child(7):hover {
    &::after {
      width: 0;
    }
  }
  &:nth-child(6) {
    @media (max-width: 1120px) {
      display: none;
    }
  }
  &:nth-child(7) {
    @media (max-width: 1120px) {
      display: none;
    }
  }
`;

const SecondaryNavItem = styled.span`
  color: #060707;
  font-size: 20px;
  font-weight: 500;

  position: relative;

  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    top: 26px;
    left: 0px;
    width: 0%;
    height: 2px;
    background: #a91e22;
    transition: all 0.3s;
  }
  &:hover {
    &::after {
      width: 100%;
    }
  }
`;

const SecondaryNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 32px;
`;

const Menu = styled.img`
  width: 14px;
  display: none;
  @media (max-width: ${Displays.tablet}) {
    display: block;
  }
`;
