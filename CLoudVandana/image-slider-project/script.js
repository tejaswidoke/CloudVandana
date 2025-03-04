const images = [
    "images/image1.jpg",
    "images/image2.jpg",
    "images/image3.jpg",
    "images/image4.jpg"
];

let currentIndex = 0;
const sliderImage = document.getElementById("sliderImage");
const prevBtn = document.getElementById("prevBtn");
const nextBtn = document.getElementById("nextBtn");
const dots = document.querySelectorAll(".dot");

// Function to update the image source
function updateImage() {
    sliderImage.style.opacity = "0"; // Fade out effect
    setTimeout(() => {
        sliderImage.src = images[currentIndex];
        sliderImage.style.opacity = "1"; // Fade in effect
        updateDots(); // Update dots when image changes
    }, 200);
}

// Function to update the active dot
function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle("active", index === currentIndex);
    });
}

// Next button click event
nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateImage();
});

// Previous button click event
prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + images.length) % images.length;
    updateImage();
});

// Add click event to dots
dots.forEach((dot) => {
    dot.addEventListener("click", () => {
        currentIndex = parseInt(dot.getAttribute("data-index"));
        updateImage();
    });
});

// Initialize the first image and dots
updateImage();