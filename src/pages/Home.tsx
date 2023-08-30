import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Menu from "../ui/Menu";
import OnlineStore from "../ui/OnlineStore";
import Pink from "../ui/Pink";
import TrackPackage from "../ui/TrackPackage";
import Login from "../ui/Login";
import Calculator from "../ui/Calculator";

export default function Home() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [loginOpened, setLoginOpened] = useState(false);
  const [calculatorOpened, setCalculatorOpened] = useState(false);

  const shouldDisable = loginOpened || menuOpened || calculatorOpened;

  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  const handleLogin = () => {
    setLoginOpened(!loginOpened);
    !loginOpened && setMenuOpened(false);
  };

  const handleCalculator = () => {
    setCalculatorOpened(!calculatorOpened);
    !calculatorOpened && setMenuOpened(false);
  };

  const stopEvent = (event: Event) => {
    event?.preventDefault();
  };

  useEffect(() => {
    if (shouldDisable) {
      window.addEventListener("wheel", stopEvent, { passive: false });
      window.addEventListener("touchmove", stopEvent, { passive: false });
      window.addEventListener("scroll", stopEvent, { passive: false });
    }
    return () => {
      window.removeEventListener("wheel", stopEvent);
      window.removeEventListener("touchmove", stopEvent);
      window.removeEventListener("scroll", stopEvent);
    };
  }, [shouldDisable]);
  return (
    <Wrapper>
      <Header handleClick={handleClick} menuOpened={menuOpened} openLogin={handleLogin} openCalculator={handleCalculator} />
      <Menu opened={menuOpened} openLogin={handleLogin} openCalculator={handleCalculator} />
      <Login opened={loginOpened} closeLogin={handleLogin} />
      <Calculator opened={calculatorOpened} closeCalculator={handleCalculator} />
      <Pink openCalculator={handleCalculator} />
      <TrackPackage />
      <OnlineStore />
      <Footer />
    </Wrapper>
  );
}
