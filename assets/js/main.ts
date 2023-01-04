import {MENU} from './menu';
import {MODAL} from './modal'
import {THEME_SWITCHER} from './theme-switcher';

window.addEventListener('load', function () {
    MENU.init();
    MODAL.init();
    THEME_SWITCHER.init();
});