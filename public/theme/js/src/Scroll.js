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

        if (elementClass == 'page') {
            elementTop = document.documentElement.scrollTop;
            percentageHeight = elementHeight - windowHeight;
            percentage = (elementTop / percentageHeight) * 100;
        } 

        percentage = round(percentage, 1);

        if (percentage >= 0 && percentage <= 100 ) {
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