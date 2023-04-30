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
              value: ["#ffffff"],
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
              value: ["#000000"],
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
      number: {
        value: 80,
        density: {
          enable: true,
          height: 1000,
          width: 1000,
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
      .map(r => r.target as HTMLElement)
      .forEach(setTheme);
  };
  const observer = new MutationObserver(themeChange);
  const target = document.querySelector("html");
  observer.observe(target, { attributes: true });

  setTheme(target);
});