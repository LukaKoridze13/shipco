import { useState } from "react";
import Wrapper from "../components/Wrapper";
import Footer from "../ui/Footer";
import Header from "../ui/Header";
import Menu from "../ui/Menu";
import OnlineStore from "../ui/OnlineStore";
import Pink from "../ui/Pink";
import TrackPackage from "../ui/TrackPackage";

export default function Home() {
  const [menuOpened, setMenuOpened] = useState(false);

  const handleClick = () => {
    menuOpened ? setMenuOpened(false) : setMenuOpened(true);
  };

  return (
    <Wrapper>
      <Header handleClick={handleClick} menuOpened={menuOpened} />
      <Menu opened={menuOpened}  />
      <Pink />
      <TrackPackage />
      <OnlineStore />
      <Footer />
    </Wrapper>
  );
}
