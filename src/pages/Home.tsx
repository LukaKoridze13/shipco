import Wrapper from "../components/Wrapper";
import Header from "../ui/Header";
import OnlineStore from "../ui/OnlineStore";
import Pink from "../ui/Pink";
import TrackPackage from "../ui/TrackPackage";

export default function Home() {
  return (
    <Wrapper>
      <Header />
      <Pink />
      <TrackPackage />
      <OnlineStore />
    </Wrapper>
  );
}
