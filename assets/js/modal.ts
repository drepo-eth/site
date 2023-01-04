export const MODAL = {};

MODAL.init = function () {
    const $modal = document.querySelector('.modal');
    const $figures = document.querySelectorAll('.figure');

    if ($modal && $figures) {
        $figures.forEach($figure => {
            $figure.addEventListener('click', function (event) {
                event.preventDefault();

                const $figcaptionClone = $figure.querySelector('figcaption').cloneNode(true);

                const imageSrc = $figure.querySelector('a').href;
                const imageOrientation = $figure.dataset.orientation;
                const $image = document.createElement('img');
                const style = $figure.classList.contains('figure--svg') ? 'svg' : 'original';
                $image.classList.add(style);
                $image.src = imageSrc;

                if (imageOrientation) {
                    $image.classList.add(imageOrientation);
                }

                $modal.querySelector('.modal__figure').replaceChildren($image, $figcaptionClone);
                $modal.classList.remove('is-hidden');
            })
        })

        const $closeBtn = $modal.querySelector('.modal__close-btn');

        // Refactor
        if ($closeBtn) {
            $closeBtn.addEventListener('click', function () {
                $modal.classList.add('is-hidden');

            })
        }

        window.onclick = function(event) {
            if (event.target == $modal) {
                $modal.classList.add('is-hidden');
            }
        }
    }
}