window.onload = () => {
    const $menu = document.querySelector('.menu');
    const $menuBtn = document.querySelector('.menu__btn');

    $menuBtn.addEventListener('click', function () {
        if ($menu.classList.contains('is-open')) {
            $menu.classList.remove('is-open');
            $menu.classList.add('is-closed');
        } else if ($menu.classList.contains('is-closed')) {
            $menu.classList.add('is-open');
            $menu.classList.remove('is-closed');
        }
    })
};