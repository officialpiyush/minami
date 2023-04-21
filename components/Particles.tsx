"use client";

import { useCallback } from "react";
import TSParticles from "react-particles";
import type { Container, Engine } from "tsparticles-engine";
import { loadFull } from "tsparticles";
import { loadStarsPreset } from "tsparticles-preset-stars";

export default function Particles() {
  async function customInit(engine: Engine): Promise<void> {
    // this adds the preset to tsParticles, you can safely use the
    await loadStarsPreset(engine);

    // this adds the preset to tsParticles, you can safely use the
    await loadFull(engine);
  }

  const onLoad = useCallback((container: Container) => {
    // do something with the container
    console.log(container);
  }, []);

  const options = {
    preset: "stars",
  };

  return <TSParticles options={{ options }} init={customInit} />;
}
