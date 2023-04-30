import { tsParticles } from 'tsparticles-engine';
import { loadLinksPreset } from 'tsparticles-preset-links';

window.addEventListener('load', async () => {
    await loadLinksPreset(tsParticles);
    tsParticles.load('particles', {
      preset: 'links',
      background: {
        color: '#000000'
      },
      particles: {
        move: {
          enable: true
        },
        color: {
          value: '#ffffff',
        },
        number: {
          value: 100
        },
        links: {
          enable: true,
        }
      }
    });
});