// IIFE
(function() {
    // scoped to IIFE
    function makeSlideShow(slides) {
        const slidesInner = slides.querySelector('.slides-inner');
        const images = slidesInner.querySelectorAll('img');

        // ######################
        // Timer Setup
        const delay = parseInt(slides.dataset.delay);
        const transition = parseInt(slides.dataset.transition);
        const slidesWidth = slides.clientWidth;

        let index = 0; // Represents the slide position

        let interval = setInterval(nextSlide, delay);

        // ######################
        // Button Setup
        const nextBtn = slides.querySelector('.next-btn');
        const prevBtn = slides.querySelector('.prev-btn');

        if (nextBtn !== null) {
            nextBtn.addEventListener('click', e => {
                clearInterval(interval);
                // TODO: New interval
                nextSlide();
            });
        }

        if (prevBtn !== null) {
            prevBtn.addEventListener('click', e => {
                clearInterval(interval);
                prevSlide();
            });
        }

        // ######################
        // Indicator Setup
        const indicators = [];
        const indicatorContainer = slides.querySelector('.ms-slide-indicators');
        if (indicatorContainer !== null) {
            for (let i = 0; i < images.length; i += 1) {
                const list = document.createElement('li');
                indicatorContainer.appendChild(list);
                indicators.push(list);
            }

            indicators[0].style.backgroundColor = '#eee';
        }

        // ######################
        // Helper Functions
        function nextSlide() {
            index += 1;
            if (index === images.length) {
                index = 0; // Resets the position
            }

            showSlide();
        }

        function prevSlide() {
            index -= 1;
            if (index < 0) {
                index = images.length - 1;
            }

            showSlide();
        }

        function showSlide() {
            slidesInner.style = `transform: translate3d(${index * -slidesWidth}px, 0, 0)`;
            slidesInner.style.transition = `${transition}ms`;

            indicators.forEach((element, i) => {
                if (i === index) {
                    element.style.backgroundColor = '#eee'; // Change later
                } else {
                    element.style.backgroundColor = '#eeeeee59'; // Change later
                }
            });
        }
    }

    const slideShows = document.querySelectorAll('.ms-slide-show');

    for (let i = 0; i < slideShows.length; i += 1) {
        makeSlideShow(slideShows[i]);
    }
})();
