	let root = document.documentElement;
	root.style.setProperty('--width', window.innerWidth);
	window.addEventListener('resize', function() {
	    root.style.setProperty('--width', window.innerWidth);
	}, true);