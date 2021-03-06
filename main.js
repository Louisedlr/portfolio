function refreshPage(){
    window.location.reload();
} 

window.addEventListener("wheel", function() {
    let pageY = window.scrollY;
    document.querySelector(".transition").style.transform = `translateY(${pageY}px)`;
    document.querySelector(".transition").classList.add("appear");
})

// Setup isScrolling variable
var isScrolling;

// Listen for scroll events
window.addEventListener('scroll', function ( event ) {

	// Clear our timeout throughout the scroll
	window.clearTimeout( isScrolling );

	// Set a timeout to run after scrolling ends
	isScrolling = setTimeout(function() {

		// Run the callback
        document.querySelector(".transition").classList.remove("appear");

	}, 500);

}, false);
