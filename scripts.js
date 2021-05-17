function animateOnScrollIn(elementId) {
    // get the element to animate
    var element = document.getElementById(elementId);
    var elementHeight = element.clientHeight;

    // listen for scroll event and call animate function
    document.addEventListener('scroll', animate);

    // check if element is in view
    function inView() {
    // get window height
    var windowHeight = window.innerHeight;
    // get number of pixels that the document is scrolled
    var scrollY = window.scrollY || window.pageYOffset;
    
    // get current scroll position (distance from the top of the page to the bottom of the current viewport)
    var scrollPosition = scrollY + windowHeight;
    // get element position (distance from the top of the page to the bottom of the element)
    var elementPosition = element.getBoundingClientRect().top + scrollY + elementHeight;
    
    // is scroll position greater than element position? (is element in view?)
    if (scrollPosition > elementPosition) {
        return true;
    }
    
    return false;
    }

    // animate element when it is in view
    function animate() {
    // is element in view?
    if (inView()) {
        // element is in view, add class to element
        element.classList.add('animate');
    }
    }
}

// collect all elements that only need animating when in view
var animatedElements = document.getElementsByClassName("animate-in-view");

// loop through elements and give them the animation class
for (i=0; i<animatedElements.length; i++) {
    var element = animatedElements[i];
    var elementId = element.id;
    animateOnScrollIn(elementId);
}


// LOADER

var timeout;

function loaderTimeout() {
  window.scrollTo(0,0)
  timeout = setTimeout(showPage, 1000);
}

function showPage() {
  var loader = document.getElementById("loader");
  loader.style.opacity = "0";
  loader.style.visibility = "hidden";
}

