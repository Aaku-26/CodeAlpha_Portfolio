// Smooth scrolling for nav links
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

// Simple form submission alert
document.querySelector("form").addEventListener("submit", function(e){
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
});
