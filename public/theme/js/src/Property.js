// Update css variable with with viewport width
let root = document.documentElement;
root.style.setProperty('--width', window.innerWidth);

// Add event listener to update css variable width 
// when the window is resized
window.addEventListener('resize', function() {
    root.style.setProperty('--width', window.innerWidth);
}, true);