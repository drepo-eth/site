import { tsParticles } from "tsparticles-engine";
import { loadLinksPreset } from "tsparticles-preset-links";

window.addEventListener("load", async () => {
  await loadLinksPreset(tsParticles);
  const particles = await tsParticles.load("particles", {
    preset: "links",
    fullScreen: false,
    themes: [
      {
        name: "dark",
        options: {
          particles: {
            color: {
              value: ["#ffffff", "#008cd7", "#14141e"],
            },
            line_linked: {
              color: "#ffffff",
            },
          },
        },
      },
      {
        name: "light",
        options: {
          particles: {
            color: {
              value: ["#000000", "#0000ff", "#808080"],
            },
            line_linked: {
              color: "#000000",
            },
          },
        },
      },
    ],
    background: {
      opacity: 0,
    },
    particles: {
      line_linked: {
        opacity: 0.7,
        width: 1,
      },
      number: {
        value: 80,
        density: {
          enable: true,
          height: 1000,
          width: 1000,
        },
      },
      move: {
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200,
          },
        },
        direction: "none",
        enable: true,
        outModes: "out",
        random: false,
        speed: 2,
        straight: false,
      },
      opacity: {
        value: 0.8,
        random: true,
        anim: {
          enable: false,
          speed: 2,
          opacity_min: 0.4,
          sync: false,
        },
      },
      size: {
        animation: {
          enable: true,
          speed: 2,
          sync: false,
        },
        value: {
          min: 1,
          max: 4,
        },
      },
    },
  });

  const setTheme = (target: HTMLElement) => {
    if (target.classList.contains("dark")) {
      particles.loadTheme("dark");
    } else {
      particles.loadTheme("light");
    }
  };
  const themeChange = (mutationList: Array<MutationRecord>) => {
    mutationList
      .filter((r) => r.type === "attributes" && r.attributeName === "class")
      .map((r) => r.target as HTMLElement)
      .forEach(setTheme);
  };
  const observer = new MutationObserver(themeChange);
  const target = document.querySelector("html");
  observer.observe(target, { attributes: true });

  setTheme(target);
});
