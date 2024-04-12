function toggleMenu() {
    var element = document.getElementById("navbar-links");
    element.classList.toggle("hidden");
}

$('.navLinks').on('mouseenter', (list) => {
    console.log(list.target.innerHTML.toLowerCase());
})

function scrollAgal() {
    // Get the .products_scroll div
    var productsScrollDiv = document.querySelector(".products_scroll");

    // Scroll horizontally by 200px
    productsScrollDiv.scrollLeft += 1000;
};

function scrollPachal() {
    // Get the .products_scroll div
    var productsScrollDiv = document.querySelector(".products_scroll");

    // Scroll horizontally by 200px
    productsScrollDiv.scrollLeft += -1000;
};

$('.products_scroll').on('mouseenter', () => {
    var svgColor = document.querySelector('#svg-object');
    console.log(svgColor);
})


// Function to handle intersection observer callback
function handleIntersection(entries, observer) {
    entries.forEach(entry => {
        // If target element is in viewport
        if (entry.isIntersecting) {
            // Show alert or do any other action
            // alert('Div is in view!');
        }
    });
}

// Set up the intersection observer
const observer = new IntersectionObserver(handleIntersection, {
    root: null, // Use the viewport as the root
    threshold: 0.5 // Trigger the callback when 50% of the target is visible
});

// Get the target element
const target = document.querySelector('#numbers');

// Start observing the target element
if (target) {
    observer.observe(target);
}

