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

document.addEventListener('DOMContentLoaded', function() {
  const filterLinks = document.querySelectorAll('.filter-link');
  const cards = document.querySelectorAll('.card');
  const dropdown = document.querySelector('.dropdown');

  filterLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      
      const selectedCountry = this.getAttribute('data-country');

      // Filter cards
      cards.forEach(card => {
        // Un-flip cards before hiding/showing
        card.classList.remove('is-flipped');

        if (selectedCountry === 'all' || card.getAttribute('data-country') === selectedCountry) {
          card.classList.remove('hide');
        } else {
          card.classList.add('hide');
        }
      });

      // Close the dropdown after selecting an option
      dropdown.classList.remove('active');
    });
  });
});

// Preserve your existing flipCard logic
function flipCard(cardElement) {
  cardElement.classList.toggle('is-flipped');
}