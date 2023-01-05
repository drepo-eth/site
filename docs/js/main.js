(() => {
  // ns-hugo:/home/runner/work/site/site/assets/js/menu.ts
  var MENU = {};
  MENU.init = function() {
    const $body = document.querySelector("body");
    const $menu = document.querySelector(".menu");
    const $menuBtn = document.querySelector(".menu__btn");
    let MenuState = sessionStorage.getItem("menu-state");
    if ($menu && $menuBtn) {
      if (MenuState === null || MenuState === "open") {
        $menu.classList.add("is-open");
        $menu.classList.remove("is-closed");
        $body.classList.add("has-menu-opened");
      } else if (MenuState === "closed") {
        $menu.classList.add("is-closed");
        $menu.classList.remove("is-open");
        $body.classList.remove("has-menu-opened");
      }
      $body.classList.remove("is-loading");
      $menuBtn.addEventListener("click", function() {
        if ($menu.classList.contains("is-open")) {
          $menu.classList.remove("is-open");
          $menu.classList.add("is-closed");
          $body.classList.remove("has-menu-opened");
          sessionStorage.setItem("menu-state", "closed");
        } else if ($menu.classList.contains("is-closed")) {
          $menu.classList.add("is-open");
          $menu.classList.remove("is-closed");
          $body.classList.add("has-menu-opened");
          sessionStorage.setItem("menu-state", "open");
        }
      });
    }
  };

  // ns-hugo:/home/runner/work/site/site/assets/js/modal.ts
  var MODAL = {};
  MODAL.init = function() {
    const $modal = document.querySelector(".modal");
    const $figures = document.querySelectorAll(".figure");
    if ($modal && $figures) {
      $figures.forEach(($figure) => {
        $figure.addEventListener("click", function(event) {
          event.preventDefault();
          const $figcaptionClone = $figure.querySelector("figcaption").cloneNode(true);
          const imageSrc = $figure.querySelector("a").href;
          const imageOrientation = $figure.dataset.orientation;
          const $image = document.createElement("img");
          const style = $figure.classList.contains("figure--svg") ? "svg" : "original";
          $image.classList.add(style);
          $image.src = imageSrc;
          if (imageOrientation) {
            $image.classList.add(imageOrientation);
          }
          $modal.querySelector(".modal__figure").replaceChildren($image, $figcaptionClone);
          $modal.classList.remove("is-hidden");
        });
      });
      const $closeBtn = $modal.querySelector(".modal__close-btn");
      if ($closeBtn) {
        $closeBtn.addEventListener("click", function() {
          $modal.classList.add("is-hidden");
        });
      }
      window.onclick = function(event) {
        if (event.target == $modal) {
          $modal.classList.add("is-hidden");
        }
      };
    }
  };

  // ns-hugo:/home/runner/work/site/site/assets/js/theme-switcher.ts
  var THEME_SWITCHER = {};
  THEME_SWITCHER.init = function() {
    const $root = document.querySelector("html");
    const $themeSwitcher = document.querySelector(".header__theme-btn");
    let systemInitiatedDark = window.matchMedia("(prefers-color-scheme: dark)");
    let themeState = sessionStorage.getItem("theme");
    const changeMode = function(isDarkModeActivate) {
      if (isDarkModeActivate) {
        $root.classList.add("dark");
        $root.classList.remove("light");
        sessionStorage.setItem("theme", "dark");
      } else {
        $root.classList.add("light");
        $root.classList.remove("dark");
        sessionStorage.setItem("theme", "light");
      }
    };
    if (themeState !== "undefined" && themeState !== null) {
      changeMode(themeState === "dark");
    } else {
      changeMode(systemInitiatedDark.matches);
    }
    if ($themeSwitcher) {
      $themeSwitcher.addEventListener("click", function() {
        changeMode(!$root.classList.contains("dark"));
      });
    }
  };

  // <stdin>
  window.addEventListener("load", function() {
    MENU.init();
    MODAL.init();
    THEME_SWITCHER.init();
  });
})();
