import * as React from "react";
import { Box, Button, MobileStepper } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { KeyboardArrowLeft as ArrowLeftIcon, KeyboardArrowRight as ArrowRightIcon } from "@mui/icons-material";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Autoplay, Pagination, Navigation } from "swiper";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import LatestSoundList from "./LatestSoundList";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const LatestSound = () => {
  return (
    <Swiper
      effect={"coverflow"}
      grabCursor={true}
      centeredSlides={true}
      slidesPerView={"auto"}
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

/*
const LatestSound = () => {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = LatestSoundList.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };
  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };
  const handleStepChange = (step) => {
    setActiveStep(step);
  };

  return (
    <Box sx={{ maxWidth: 900, flexGrow: 1 }}>
      <AutoPlaySwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {LatestSoundList.map((step, index) => (
          <div key={step.label}>
            {Math.abs(activeStep - index) <= 2 ? (
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
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>
      <MobileStepper
        steps={maxSteps}
        position="static"
        activeStep={activeStep}
        nextButton={
          <Button size="small" onClick={handleNext} disabled={activeStep === maxSteps - 1}>
            Next
            {theme.direction === "rtl" ? <ArrowLeftIcon /> : <ArrowRightIcon />}
          </Button>
        }
        backButton={
          <Button size="small" onClick={handleBack} disabled={activeStep === 0}>
            {theme.direction === "rtl" ? <ArrowRightIcon /> : <ArrowLeftIcon />}
            Back
          </Button>
        }
      />
    </Box>
  );
};
*/

export default LatestSound;
