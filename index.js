// ===============================
// Smooth Scrolling
// ===============================
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function(e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// ===============================
// Fade-in Animation on Scroll
// ===============================
const elements = document.querySelectorAll(
    ".card, .place, .review, .about-content"
);

const observer = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }

    });

}, {
    threshold: 0.2
});

elements.forEach(element => {
    element.classList.add("hidden");
    observer.observe(element);
});

// ===============================
// Review Slider
// ===============================
const reviews = document.querySelectorAll(".review");

let currentReview = 0;

function showReview(index) {

    reviews.forEach(review => {
        review.style.display = "none";
    });

    reviews[index].style.display = "block";
}

if (reviews.length > 0) {

    showReview(currentReview);

    setInterval(() => {

        currentReview++;

        if (currentReview >= reviews.length) {
            currentReview = 0;
        }

        showReview(currentReview);

    }, 4000);
}

// ===============================
// Book Button
// ===============================
const button = document.querySelector(".btn");

if (button) {

    button.addEventListener("click", function(e) {

        e.preventDefault();

        alert("Thank you for choosing ExploreWorld Travel Agency! Booking services will be available soon.");

    });

}

// ===============================
// Back to Top Button
// ===============================
const topButton = document.createElement("button");

topButton.innerHTML = "↑";

topButton.id = "topBtn";

document.body.appendChild(topButton);

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {

        topButton.style.display = "block";

    } else {

        topButton.style.display = "none";

    }

});

topButton.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});