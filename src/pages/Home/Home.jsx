import React from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import Typewriter from "typewriter-effect";

const Home = () => {
  const particlesInit = async (main) => {
    console.log("✅ Particles Loaded");
    await loadFull(main);
  };

  return (
    <div
      data-aos="fade-right"
      data-aos-offset="300"
      data-aos-easing="ease-in-sine"
      className="relative h-screen w-full bg-slate-900 overflow-hidden"
    >
      {/* Background Particles */}
      <Particles
        id="tsparticles"
        init={particlesInit}
        className="absolute top-0 left-0 w-full h-full z-0"
        options={{
          fullScreen: { enable: false },
          background: {
            color: "#0f172a",
          },
          fpsLimit: 60,
          interactivity: {
            events: {
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              repulse: {
                distance: 100,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: { value: "#3B82F6" }, // Tailwind sky-400
            links: {
              color: "#3B82F6",
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1,
            },
            collisions: { enable: true },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              outModes: {
                default: "bounce",
              },
            },
            number: {
              value: 60,
              density: {
                enable: true,
                area: 800,
              },
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 4 },
            },
          },
          detectRetina: true,
        }}
      />

      {/* Foreground Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4 text-white">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          <span className="hidden md:inline">Hi, I'm </span> Sabbir Hossain
        </h1>
        <h2 className="text-2xl md:text-4xl text-primary font-semibold h-20">
          <Typewriter
            options={{
              strings: [
                "Web Developer",
                "MERN Developer",
                "Front-End Developer",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
              deleteSpeed: 50,
              pauseFor: 1500,
            }}
          />
        </h2>
      </div>
    </div>
  );
};

export default Home;
