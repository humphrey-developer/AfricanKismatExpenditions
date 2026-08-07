// STEVE
const form = document.querySelector("form");

form.addEventListener("submit",function (e) {
    e.preventDefault();

    const name =document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;

    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;        
    }

    alert("Thank you! Your message has been sent.");

    form.reset();
});


// <!-- INTERACTION & SCROLL ANIMATION SCRIPT -->
// Scroll Fade-In Animation
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  },
  { threshold: 0.15 },
);

document.querySelectorAll(".hidden").forEach((el) => observer.observe(el));

// Back To Top Button Logic
const topBtn = document.getElementById("topBtn");
window.onscroll = function () {
  if (
    document.body.scrollTop > 300 ||
    document.documentElement.scrollTop > 300
  ) {
    topBtn.style.display = "block";
  } else {
    topBtn.style.display = "none";
  }
};

topBtn.addEventListener("click", function () {
  window.scrollTo({ top: 0, behavior: "smooth" });
});
