function makeSlideShow(slidesID) {
    const slides = document.getElementById(slidesID);
    const slidesInner = slides.querySelector('.slides-inner'); //?  Why didn't we use getElementByClassName
    const images = slidesInner.querySelectorAll('img'); //?  Why didn't we use getElementByTag

    const slidesWidth = slides.clientWidth;
    let index = 0; // Represents the slide

    setInterval(() => {
        index++;
        if (index === images.length) {
            index = 0; // Resets the position
        }
        slidesInner.style = `transform: translate3d(${index * -slidesWidth}px, 0, 0)`;
    }, 2000);
}

makeSlideShow('slides');
makeSlideShow('slides-2');
