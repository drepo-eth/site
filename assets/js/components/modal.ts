import {getContainerWidth} from '../helper';

export const modal = function () {
    const QUERY = {
        modal: '.modal',
        closeBtn: '.modal__close-btn',
        figure: '.figure',
        svgFigure: 'figure--svg',
        svg: 'svg',
        original: 'original',
        figcaption: 'figcaption',
        isHidden: 'is-hidden',
        link: 'a'
    }

    const $modal = document.querySelector(QUERY.modal);
    const $figures = document.querySelectorAll(QUERY.figure);
    const $closeBtn = $modal.querySelector(QUERY.closeBtn);

    const createFigure = function ($fig) {
        const imageSrc = $fig.querySelector(QUERY.link).href;
        const imageOrientation = $fig.dataset.orientation;
        const style = $fig.classList.contains(QUERY.svgFigure) ? QUERY.svg : QUERY.original;

        const $image = document.createElement('img');

        $image.classList.add(style);
        $image.src = imageSrc;

        if (imageOrientation) {
            $image.classList.add(imageOrientation);
        }

        return $image;
    }

    const onFigureClicked = function ($figure, event) {

      if (getContainerWidth() >= 1024) {
        event.preventDefault();

        const $figcaptionClone = $figure.querySelector(QUERY.figcaption).cloneNode(true);
        $modal.querySelector('.modal__figure').replaceChildren(createFigure($figure), $figcaptionClone);
        $modal.classList.remove(QUERY.isHidden);
      }
    }

    const init = function () {
        $figures.forEach($figure => {
            $figure.addEventListener('click', onFigureClicked.bind(this, $figure));
        })

        $closeBtn.addEventListener('click', function () {
            $modal.classList.add(QUERY.isHidden);
        })

        $modal.addEventListener('click', function (event) {
            if (event.target === $modal) {
                $modal.classList.add(QUERY.isHidden);
            }
        })
    }

    if ($modal && $figures && $closeBtn) {
        init();
    }
}