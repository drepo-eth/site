(() => {
  // ns-hugo:/home/runner/work/site/site/assets/js/helper.ts
  var getViewportWidth = function() {
    return Math.max(document.documentElement.clientWidth || 0, window.innerWidth || 0);
  };
  var debounce = function(callback) {
    let timer;
    return function(event) {
      if (timer) {
        clearTimeout(timer);
      }
      timer = setTimeout(callback, 100, event);
    };
  };

  // ns-hugo:/home/runner/work/site/site/assets/js/components/menu.ts
  var menu = function() {
    const QUERY = {
      body: "body",
      menu: ".menu",
      menuBtn: ".menu__btn",
      open: "open",
      closed: "closed",
      isOpen: "is-open",
      isClosed: "is-closed",
      isLoading: "is-loading",
      hasMenuOpen: "has-menu-open",
      menuCookie: "menu-state"
    };
    const menuState = sessionStorage.getItem(QUERY.menuCookie);
    const $body = document.querySelector(QUERY.body);
    const $menu = document.querySelector(QUERY.menu);
    const $menuBtn = document.querySelector(QUERY.menuBtn);
    const open = function() {
      $menu.classList.add(QUERY.isOpen);
      $menu.classList.remove(QUERY.isClosed);
      $body.classList.add(QUERY.hasMenuOpen);
    };
    const close = function() {
      $menu.classList.add(QUERY.isClosed);
      $menu.classList.remove(QUERY.isOpen);
      $body.classList.remove(QUERY.hasMenuOpen);
    };
    const init = function() {
      if (menuState === null || menuState === QUERY.open) {
        open();
      } else if (menuState === QUERY.closed) {
        close();
      }
      $body.classList.remove(QUERY.isLoading);
    };
    const onMenuBtnClick = function() {
      if ($menu.classList.contains(QUERY.isOpen)) {
        close();
        sessionStorage.setItem(QUERY.menuCookie, QUERY.closed);
      } else if ($menu.classList.contains(QUERY.isClosed)) {
        open();
        sessionStorage.setItem(QUERY.menuCookie, QUERY.open);
      }
    };
    if ($menu && $menuBtn) {
      $menuBtn.addEventListener("click", onMenuBtnClick.bind(this));
      window.addEventListener("resize", debounce(function(event) {
        if (getViewportWidth() < 670) {
          close();
        } else {
          open();
        }
      }));
      init();
    }
  };

  // ns-hugo:/home/runner/work/site/site/assets/js/components/modal.ts
  var modal = function() {
    const QUERY = {
      modal: ".modal",
      closeBtn: ".modal__close-btn",
      figure: ".figure",
      svgFigure: "figure--svg",
      svg: "svg",
      original: "original",
      figcaption: "figcaption",
      isHidden: "is-hidden",
      link: "a"
    };
    const $modal = document.querySelector(QUERY.modal);
    const $figures = document.querySelectorAll(QUERY.figure);
    const $closeBtn = $modal.querySelector(QUERY.closeBtn);
    const createFigure = function($fig) {
      const imageSrc = $fig.querySelector(QUERY.link).href;
      const imageOrientation = $fig.dataset.orientation;
      const style = $fig.classList.contains(QUERY.svgFigure) ? QUERY.svg : QUERY.original;
      const $image = document.createElement("img");
      $image.classList.add(style);
      $image.src = imageSrc;
      if (imageOrientation) {
        $image.classList.add(imageOrientation);
      }
      return $image;
    };
    const onFigureClicked = function($figure, event) {
      event.preventDefault();
      const $figcaptionClone = $figure.querySelector(QUERY.figcaption).cloneNode(true);
      $modal.querySelector(".modal__figure").replaceChildren(createFigure($figure), $figcaptionClone);
      $modal.classList.remove(QUERY.isHidden);
    };
    const init = function() {
      $figures.forEach(($figure) => {
        $figure.addEventListener("click", onFigureClicked.bind(this, $figure));
      });
      $closeBtn.addEventListener("click", function() {
        $modal.classList.add(QUERY.isHidden);
      });
      $modal.addEventListener("click", function(event) {
        if (event.target === $modal) {
          $modal.classList.add(QUERY.isHidden);
        }
      });
    };
    if ($modal && $figures && $closeBtn) {
      init();
    }
  };

  // ns-hugo:/home/runner/work/site/site/assets/js/components/theme-switcher.ts
  var themeSwitcher = function() {
    const QUERY = {
      html: "html",
      themeBtn: ".header__theme-btn",
      darkTheme: "dark",
      lightTheme: "light",
      themeCookie: "theme-state",
      prefersDark: "(prefers-color-scheme: dark)"
    };
    const $root = document.querySelector(QUERY.html);
    const $themeSwitcher = document.querySelector(QUERY.themeBtn);
    const systemInitiatedDark = window.matchMedia(QUERY.prefersDark);
    const themeState = sessionStorage.getItem(QUERY.themeCookie);
    const activateDarkTheme = function() {
      $root.classList.add(QUERY.darkTheme);
      $root.classList.remove(QUERY.lightTheme);
      sessionStorage.setItem(QUERY.themeCookie, QUERY.darkTheme);
    };
    const activateLightTheme = function() {
      $root.classList.add(QUERY.lightTheme);
      $root.classList.remove(QUERY.darkTheme);
      sessionStorage.setItem(QUERY.themeCookie, QUERY.lightTheme);
    };
    const changeMode = function(isDarkModeActivated) {
      if (isDarkModeActivated) {
        activateDarkTheme();
      } else {
        activateLightTheme();
      }
    };
    const init = function() {
      if ($themeSwitcher) {
        $themeSwitcher.addEventListener("click", function() {
          changeMode(!$root.classList.contains(QUERY.darkTheme));
        });
      }
      if (!themeState) {
        changeMode(themeState === QUERY.darkTheme);
      } else {
        changeMode(systemInitiatedDark.matches);
      }
    };
    init();
  };

  // <stdin>
  window.addEventListener("load", function() {
    menu();
    modal();
    themeSwitcher();
  });
})();
