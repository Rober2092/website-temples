// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Modal image gallery
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const captionText = document.getElementById('caption');
const close = document.getElementsByClassName('close')[0];

document.querySelectorAll('.modal-trigger').forEach(item => {
    item.addEventListener('click', function() {
        modal.style.display = 'block';
        modalImg.src = this.src;
        captionText.innerHTML = this.alt;
    });
});

close.onclick = function() {
    modal.style.display = 'none';
}

// Basic form validation (example)
document.getElementById('contact-form').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    if (!email.includes('@')) {
        alert('Please enter a valid email address.');
        event.preventDefault(); // Prevent form submission
    }
});
