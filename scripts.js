// script.js
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    
    let hasError = false;

    // Name validation
    const name = document.getElementById('name').value.trim();
    const nameError = document.getElementById('nameError');
    if (name === '') {
        nameError.textContent = 'Name is required';
        nameError.style.display = 'block';
        hasError = true;
    } else {
        nameError.textContent = '';
        nameError.style.display = 'none';
    }

    // Email validation
    const email = document.getElementById('email').value.trim();
    const emailError = document.getElementById('emailError');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === '') {
        emailError.textContent = 'Email is required';
        emailError.style.display = 'block';
        hasError = true;
    } else if (!emailPattern.test(email)) {
        emailError.textContent = 'Invalid email address';
        emailError.style.display = 'block';
        hasError = true;
    } else {
        emailError.textContent = '';
        emailError.style.display = 'none';
    }

    // Message validation
    const message = document.getElementById('message').value.trim();
    const messageError = document.getElementById('messageError');
    if (message === '') {
        messageError.textContent = 'Message is required';
        messageError.style.display = 'block';
        hasError = true;
    } else {
        messageError.textContent = '';
        messageError.style.display = 'none';
    }

    if (!hasError) {
        alert('Form submitted successfully!');
        // You can add further form submission logic here
    }
});

