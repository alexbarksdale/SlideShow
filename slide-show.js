// IIFE

(function () {
    function makeSlideShow(slides) {
        const slidesInner = slides.querySelector('.slides-inner');
        const images = slidesInner.querySelectorAll('img');

        const delay = parseInt(slides.dataset.delay);
        const transition = parseInt(slides.dataset.transition);

        const slidesWidth = slides.clientWidth;
        let index = 0; // Represents the slide

        setInterval(() => {
            index++;
            if (index === images.length) {
                index = 0; // Resets the position
            }
            slidesInner.style = `transform: translate3d(${index * -slidesWidth}px, 0, 0)`;
            slidesInner.style.transition = `${transition}ms`;
        }, delay);
    }

    const slideShows = document.querySelectorAll('.ms-slide-show');

    for (let i = 0; i < slideShows.length; i++) {
        makeSlideShow(slideShows[i]);
    }
})();