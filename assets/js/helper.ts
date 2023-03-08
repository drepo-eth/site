let viewport;

window.addEventListener('load', function () {
  viewport = getViewport();
});

export const getViewportWidth = function () {
  return Math.max(
    document.documentElement.clientWidth || 0,
    window.innerWidth || 0
  );
};

export const getContainerWidth = function () {
  return document.querySelector('.container').clientWidth;
};

export const debounce = function (callback) {
  let timer;
  return function (event) {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(callback, 100, event);
  };
};

export const getViewport = function () {
  const breakTablet = 670;
  const breakDesktop = 1024;
  const currentViewport = getViewportWidth();
  let vw;

  if (currentViewport < breakTablet) {
    vw = 'mobile';
  } else if (currentViewport >= breakTablet && currentViewport < breakDesktop) {
    vw = 'tablet';
  } else if (currentViewport >= breakDesktop) {
    vw = 'desktop';
  }

  return vw;
};

window.addEventListener(
  'resize',
  debounce(function () {
    const viewportNew = getViewport();

    if (viewportNew !== viewport) {
      window.dispatchEvent(new Event('viewportchange'));
      viewport = viewportNew;
    }
  })
);
