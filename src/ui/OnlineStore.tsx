import styled from "styled-components";
import arrow from "../assets/arrow.svg";
import store1 from "../assets/store1.png";
import store2 from "../assets/store2.png";
import store3 from "../assets/store3.png";
import store4 from "../assets/store4.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import FlexWrapper from "../components/FlexWrapper";
export default function OnlineStore() {
  return (
    <Section>
      <Flexible>
        <Div>
          <Title>Best online stores</Title>
          <Text>These stores are the most popular among our users. Huge selection, reasonable prices with a lot of discounts and sales - everything you need for the easy and convenient shopping.</Text>
        </Div>
        <ShowMore>
          <span>Show more</span>
          <img src={arrow} alt="Arrow" />
        </ShowMore>
      </Flexible>

      <Swiper slidesPerView={'auto'}>
        <SwiperSlide style={{ cursor: "pointer" }}>
          <Img src={store1} alt="store" />
        </SwiperSlide>
        <SwiperSlide style={{ cursor: "pointer" }}>
          <Img src={store2} alt="store" />
        </SwiperSlide>
        <SwiperSlide style={{ cursor: "pointer" }}>
          <Img src={store3} alt="store" />
        </SwiperSlide>
        <SwiperSlide style={{ cursor: "pointer" }}>
          <Img src={store4} alt="store" />
        </SwiperSlide>
        <SwiperSlide style={{ cursor: "pointer" }}>
          <Img src={store1} alt="store" />
        </SwiperSlide>
        <SwiperSlide style={{ cursor: "pointer" }}>
          <Img src={store2} alt="store" />
        </SwiperSlide>
        <SwiperSlide style={{ cursor: "pointer" }}>
          <Img src={store3} alt="store" />
        </SwiperSlide>
        <SwiperSlide style={{ cursor: "pointer" }}>
          <Img src={store4} alt="store" />
        </SwiperSlide>
      </Swiper>
    </Section>
  );
}

const Section = styled.section`
  width: 100%;
  margin-top: 80px;

  border-radius: 0px 306px 0px 0px;
  border-top: 4px solid #ffc80a;
  background: #f1e0a4;
  padding: 72px 72px 160px 72px;
`;

const Title = styled.h3`
  color: #000;
  font-size: 36px;
  font-weight: 500;
`;

const Text = styled.p`
  color: #000;
  font-size: 20px;
  font-weight: 400;
  max-width: 710px;
`;

const ShowMore = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;

  color: #000;
  font-size: 20px;
  font-weight: 500;

  cursor: pointer;
`;

const Img = styled.img`
  width: 22vw;
  max-width: 250px;
  @media (max-width: 480px) {
    width: 50vw;
  }
`;

const Div = styled.div``;

const Flexible = styled(FlexWrapper)`
  justify-content: space-between;
  align-items: flex-end;
  margin-bottom: 40px;
`;