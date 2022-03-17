
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
	});
}

// Listen for window scroll and update '--scroll-classname'
// variable with viewport percentage position of elements
// with attribute 'scroll'
function updateScrollCssVariable(element) {
    window.addEventListener('scroll', function() {
        let elementClass = element.getAttribute('class');
        let elementTop = 0 + element.getBoundingClientRect().top;
        if (elementTop > 0 && elementTop < windowHeight) {
            let percentage = 100 * (elementTop / windowHeight);
            percentage = round(percentage, 0);
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