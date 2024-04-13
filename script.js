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


// Get all images with class 'certificate'
const certificateImages = document.querySelectorAll('#certificates img');

// Get the pseudo-element div
const backgroundDiv = document.querySelector('.backgroundCert');

// Iterate over each image and add a click event listener
certificateImages.forEach(image => {
    image.addEventListener('click', function () {
        // Remove 'activeCert' class from all images
        certificateImages.forEach(img => img.classList.remove('activeCert'));
        backgroundDiv.style.display = 'none';

        // Add 'activeCert' class to the clicked image
        this.classList.add('activeCert');

        // Show the translucent background
        backgroundDiv.style.display = 'block';
    });
});

backgroundDiv.addEventListener('click', function () {
    // Remove 'activeCert' class from all images
    certificateImages.forEach(img => img.classList.remove('activeCert'));
    backgroundDiv.style.display = 'none';
})
