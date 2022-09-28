export const STATE = {};

STATE.toggleTransition = function (motionReduced) {
    const $body = document.querySelector('body');

    if (motionReduced) {
        $body.classList.add('no-transition');
    } else {
        setTimeout(function () {
            $body.classList.remove('no-transition');
        }, 300);
    }
}