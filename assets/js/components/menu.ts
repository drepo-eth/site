import {getViewport} from '../helper';

export const menu = function () {
  const QUERY = {
    body: 'body',
    menu: '.menu',
    menuBtn: '.menu__btn',
    open: 'open',
    closed: 'closed',
    isOpen: 'is-open',
    isClosed: 'is-closed',
    isLoading: 'is-loading',
    hasMenuOpen: 'has-menu-open',
    menuCookie: 'menu-state',
  };

  const menuState = sessionStorage.getItem(QUERY.menuCookie);

  const $body = document.querySelector(QUERY.body);
  const $menu = document.querySelector(QUERY.menu);
  const $menuBtn = document.querySelector(QUERY.menuBtn);

  const open = function () {
    $menu.classList.add(QUERY.isOpen);
    $menu.classList.remove(QUERY.isClosed);
    $body.classList.add(QUERY.hasMenuOpen);
    sessionStorage.setItem(QUERY.menuCookie, QUERY.open);
  };

  const close = function () {
    $menu.classList.add(QUERY.isClosed);
    $menu.classList.remove(QUERY.isOpen);
    $body.classList.remove(QUERY.hasMenuOpen);
    sessionStorage.setItem(QUERY.menuCookie, QUERY.closed);
  };

  const onMenuBtnClick = function () {
    if ($menu.classList.contains(QUERY.isOpen)) {
      close();
    } else if ($menu.classList.contains(QUERY.isClosed)) {
      open();
    }
  };

  const bindEvents = function () {
    $menuBtn.addEventListener('click', onMenuBtnClick.bind(this));
    window.addEventListener('viewportchange', function () {
      if (getViewport() === 'desktop') {
        open();
      } else {
        close();
      }
    });
  };

  const init = function () {
    if (getViewport() !== 'desktop') {
      close();
    } else {
      if (menuState === null || menuState === QUERY.open) {
        open();
      } else {
        close();
      }
    }

    $body.classList.remove(QUERY.isLoading);
  };

  if ($menu && $menuBtn) {
    bindEvents();
    init();
  }
};
