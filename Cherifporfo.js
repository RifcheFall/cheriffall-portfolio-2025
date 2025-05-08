document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    
    if (name && email && message) {
        alert('Thank you for reaching out! Your message has been sent.');
        // Here you can add your code to send form data to the server
        this.reset();
    } else {
        alert('Please fill out all fields.');
    }
});


