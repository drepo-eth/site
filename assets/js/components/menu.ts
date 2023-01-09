import {debounce, getViewportWidth} from '../helper';

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
        menuCookie: 'menu-state'
    }

    const menuState = sessionStorage.getItem(QUERY.menuCookie);

    const $body = document.querySelector(QUERY.body);
    const $menu = document.querySelector(QUERY.menu);
    const $menuBtn = document.querySelector(QUERY.menuBtn);

    const open = function () {
        $menu.classList.add(QUERY.isOpen);
        $menu.classList.remove(QUERY.isClosed);
        $body.classList.add(QUERY.hasMenuOpen);
    }

    const close = function () {
        $menu.classList.add(QUERY.isClosed);
        $menu.classList.remove(QUERY.isOpen);
        $body.classList.remove(QUERY.hasMenuOpen);
    }

    const init = function () {
        if (getViewportWidth() < 670) {
            close();
        } else {
            if (menuState === null || menuState === QUERY.open) open();
        }

        $body.classList.remove(QUERY.isLoading);
    }

    const onMenuBtnClick = function () {
        if ($menu.classList.contains(QUERY.isOpen)) {
            close();
            sessionStorage.setItem(QUERY.menuCookie, QUERY.closed);
        } else if ($menu.classList.contains(QUERY.isClosed)) {
            open();
            sessionStorage.setItem(QUERY.menuCookie, QUERY.open);
        }
    }

    if ($menu && $menuBtn) {
        $menuBtn.addEventListener('click', onMenuBtnClick.bind(this));
        window.addEventListener('resize', debounce(function(event){
            if (getViewportWidth() < 670) {
                close();
            } else {
                open();
            }
        }));

        init();
    }
};
