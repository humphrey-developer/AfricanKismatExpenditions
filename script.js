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