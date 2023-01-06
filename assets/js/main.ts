import { menu } from './components/menu';
import { modal } from './components/modal'
import { themeSwitcher } from './components/theme-switcher';

window.addEventListener('load', function () {
    menu();
    modal();
    themeSwitcher();
});