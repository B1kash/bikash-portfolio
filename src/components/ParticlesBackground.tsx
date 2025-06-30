"use client";
import { Particles } from "@tsparticles/react";

export default function ParticlesBackground() {
  return (
    <div style={{ position: "fixed", inset: 0, width: "100vw", height: "100vh", zIndex: 0, pointerEvents: "none" }}>
      <Particles
        id="tsparticles-bg"
        style={{ width: "100vw", height: "100vh" }}
        options={{
          fullScreen: { enable: false },
          background: { color: "transparent" },
          particles: {
            number: { value: 60, density: { enable: true, width: 900 } },
            color: { value: ["#3b82f6", "#10b981", "#38bdf8"] },
            links: {
              enable: true,
              color: "#3b82f6",
              opacity: 0.2,
              width: 1.2,
              distance: 120,
            },
            move: {
              enable: true,
              speed: 1.2,
              direction: "none",
              outModes: { default: "out" },
            },
            opacity: { value: 0.5 },
            size: { value: { min: 1, max: 3 } },
          },
          interactivity: {
            events: {
              onHover: { enable: true, mode: "repulse" },
              onClick: { enable: true, mode: "push" },
              resize: { enable: true },
            },
            modes: {
              repulse: { distance: 80, duration: 0.4 },
              push: { quantity: 2 },
            },
          },
          detectRetina: true,
        }}
      />
    </div>
  );
} 