(() => {
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
    const bindEvents = function() {
      if ($themeSwitcher) {
        $themeSwitcher.addEventListener("click", function() {
          changeMode(!$root.classList.contains(QUERY.darkTheme));
        });
      }
    };
    const init = function() {
      if (!!themeState) {
        changeMode(themeState === QUERY.darkTheme);
      } else {
        changeMode(systemInitiatedDark.matches);
      }
    };
    init();
    bindEvents();
  };

  // <stdin>
  themeSwitcher();
})();
