document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector(".contact-form form");
    const nameInput = document.querySelector("input[placeholder='Name']");
    const phoneInput = document.querySelector("input[placeholder='Phone Number*']");
    const emailInput = document.querySelector("input[placeholder='E-mail*']");
    const interestInput = document.querySelector("input[placeholder='Interested In']");
    const messageInput = document.querySelector("textarea[placeholder='Message*']");

    form.addEventListener("submit", function (event) {
        event.preventDefault(); 
        const name = nameInput.value;
        const phone = phoneInput.value;
        const email = emailInput.value;
        const interest = interestInput.value;
        const message = messageInput.value;

        const phonePattern = /^\d{10}$/;
        if (!phonePattern.test(phone)) {
            alert("Phone number must be exactly 10 digits.");
            return;
        }

        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        if (!emailPattern.test(email)) {
            alert("Please enter a valid email address (e.g., example@domain.com).");
            return;
        }

        if (!name || !phone || !email || !message) {
            alert("Please fill out all required fields!");
            return;
        }
        form.reset();
        alert("Thank you for contacting us! We will get back to you soon.");
    });
});
