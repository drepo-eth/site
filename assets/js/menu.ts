export const MENU = {};

MENU.init = function () {
    const $body = document.querySelector('body');

    const $menu = document.querySelector('.menu');
    const $menuBtn = document.querySelector('.menu__btn');

    let MenuState = sessionStorage.getItem('menu-state');

    if ($menu && $menuBtn) {
        // Init
        if (MenuState === null || MenuState === 'open') {
            $menu.classList.add('is-open');
            $menu.classList.remove('is-closed');

        } else if (MenuState === 'closed') {
            $menu.classList.add('is-closed');
            $menu.classList.remove('is-open');
        }
        $body.classList.remove('is-loading');

        // TODO: on ViewportChanged close

        // OnClick
        $menuBtn.addEventListener('click', function () {
            if ($menu.classList.contains('is-open')) {
                $menu.classList.remove('is-open');
                $menu.classList.add('is-closed');
                sessionStorage.setItem('menu-state', 'closed');
            } else if ($menu.classList.contains('is-closed')) {
                $menu.classList.add('is-open');
                $menu.classList.remove('is-closed');
                sessionStorage.setItem('menu-state', 'open');
            }
        })
    }
};
