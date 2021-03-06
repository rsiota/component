
// Update css variable with with viewport width
let root = document.documentElement;
root.style.setProperty('--width', window.innerWidth);

// Add event listener to update css variable width 
// when the window is resized
window.addEventListener('resize', function() {
    root.style.setProperty('--width', window.innerWidth);
}, true);

let windowHeight = window.innerHeight;
let elements = document.querySelectorAll('[scroll]');

// Check if there are elements with attribute scroll on the page
if (elements.length > 0) {
    elements.forEach((element) => {
        updateScrollCssVariable(element);
    })
}

// Listen for window scroll and update '--scroll-classname'
// variable with viewport percentage position of elements
// with attribute 'scroll'
function updateScrollCssVariable(element) {
    let elementClass = element.getAttribute('class');

    window.addEventListener('scroll', function() {
        let elementTop = 0 + element.getBoundingClientRect().top;
        let elementBottom = 0 + element.getBoundingClientRect().bottom;
        let elementHeight = elementBottom - elementTop;
        let percentageHeight = elementHeight + windowHeight;
        let percentage = 100 - (elementBottom / percentageHeight) * 100;

        // Page Scroll
        if (elementClass == 'page') {
            let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
            let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
            percentage = (winScroll / height) * 100;
        }

        percentage = round(percentage, 1);

        if (percentage >= 0 && percentage <= 100) {
            let rootEl = document.documentElement;
            let scrollCssVar = '--scroll-' + elementClass;
            rootEl.style.setProperty(scrollCssVar, percentage);
        }
    })
}

// Round helper function
function round(value, precision) {
    let multiplier = Math.pow(10, precision || 0);
    return Math.round(value * multiplier) / multiplier;
}

function scrollLottie(animationPath, animationContainer, scrollElement) {

    const scrollbar = Scrollbar.init(document.querySelector(scrollElement), {
        renderByPixels: false
    });

    let lottieProgress = lottie.loadAnimation({
        container: document.querySelector(animationContainer),
        renderer: "svg",
        loop: false,
        autoplay: false,
        path: animationPath
    });

    scrollbar.addListener(() => {
        let totalHeight = scrollbar.limit.y;
        let scrollFromTop = scrollbar.scrollTop;
        let totalFrames = lottieProgress.totalFrames;
        let scrollPercentage = (scrollFromTop * 100) / totalHeight;
        let scrollPercentRounded = Math.round(scrollPercentage); // Just in case

        // Check if the current frame is the last frame. If it's the last frame, do nothing. This prevents showing the empty frame at the end.
        if ((scrollPercentage * totalFrames) / 100 < totalFrames) {
            lottieProgress.goToAndStop((scrollPercentage * totalFrames) / 100, true);
        } else {
            return;
        }
    });

}

scrollLottie("/mediaLibrary/pathAnimation.json", ".lottie-animation", ".scroll-element");
// scrollLottie("/mediaLibrary/animation.json", ".lottie-animation", ".scroll-element");
// scrollLottie("/mediaLibrary/movieAnimation.json", ".lottie-animation", ".scroll-element");
