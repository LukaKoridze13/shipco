import { useState } from "react";
import Wrapper from "../components/Wrapper";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Menu from "../ui/Menu";
import OnlineStore from "../ui/OnlineStore";
import Pink from "../ui/Pink";
import TrackPackage from "../ui/TrackPackage";
import Login from "../ui/Login";
import Registration from "../ui/Registration";

export default function Home() {
  const [menuOpened, setMenuOpened] = useState(false);
  const [loginOpened, setLoginOpened] = useState(false);
  const [registerOpened, setRegisterOpened] = useState(false);


  const handleClick = () => {
    setMenuOpened(!menuOpened);
  };

  const handleLogin = () => {
    setLoginOpened(!loginOpened);
    !loginOpened && setMenuOpened(false);
  };

  const handleRegister = () => {
    setRegisterOpened(!registerOpened);
    !loginOpened && setMenuOpened(false);
  };
  return (
    <Wrapper>
      <Header handleClick={handleClick} menuOpened={menuOpened} openLogin={handleLogin} openRegister={handleRegister} />
      <Menu opened={menuOpened} openLogin={handleLogin} openRegister={handleRegister} />
      <Login opened={loginOpened} closeLogin={handleLogin} />
      <Registration opened={registerOpened} closeRegistration={handleRegister} />
      <Pink />
      <TrackPackage />
      <OnlineStore />
      <Footer />
    </Wrapper>
  );
}
