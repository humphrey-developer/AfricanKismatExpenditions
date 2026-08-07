// Steve
const form = document.querySelector("form");

form.addEventListener("submit",function (e) {
    e.preventDefault();

    // Get form values
    const name =document.getElementById("name").value;
    const email=document.getElementById("email").value;
    const message=document.getElementById("message").value;

    // Check if any field is empty
    if (name === "" || email === "" || message === "") {
        alert("Please fill in all the fields.");
        return;        
    }
    
    alert("Thank you! Your message has been sent.");

    // Reset the form after submission
    form.reset();
});

