import * as React from "react";
import { Box, Button, MobileStepper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { KeyboardArrowLeft as ArrowLeftIcon, KeyboardArrowRight as ArrowRightIcon } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import LatestSoundList from "./LatestSoundList";

const LatestSound = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
      loop={true}
      coverflowEffect={{
        rotate: 50,
        stretch: 0,
        depth: 300,
        modifier: 1,
        slideShadows: true,
      }}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[EffectCoverflow, Pagination]}
      className={{ display: "none" }}
    >
      {LatestSoundList.map((step, index) => (
        <SwiperSlide key={step.label} style={{ width: "500px", height: "500px" }}>
          <Box
            component="img"
            sx={{
              display: "block",
              overflow: "hidden",
              width: "100%",
            }}
            src={step.imgPath}
            alt={step.label}
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default LatestSound;
