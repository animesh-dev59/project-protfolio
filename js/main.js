// Initialize Lucide Icons
lucide.createIcons();

// Contact Form Dummy Handler
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for reaching out! Message sent successfully.');
    contactForm.reset();
  });
}