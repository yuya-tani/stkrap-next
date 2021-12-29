import * as React from "react";
import dynamic from "next/dynamic";
const ParticlesBg = dynamic(() => import("particles-bg"), {
  ssr: false,
});

const Particles = () => {
  return <ParticlesBg type="ball" num={1} bg={true} />;
};

export default Particles;
