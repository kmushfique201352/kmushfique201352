// Smooth scrolling for navigation links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Animate the "About Me" section using Intersection Observer
const aboutSection = document.querySelector('#about');
const aboutBackground = aboutSection.querySelector('.about-background');
const aboutContent = aboutSection.querySelector('.about-content');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            aboutBackground.classList.add('visible');
            aboutContent.classList.add('visible');
        } else {
            aboutBackground.classList.remove('visible');
            aboutContent.classList.remove('visible');
        }
    });
}, { threshold: 0.5 });

observer.observe(aboutSection);


const timelineItems = document.querySelectorAll('.timeline-item');

const observerTimeline = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        } else {
            entry.target.classList.remove('visible');
        }
    });
}, { threshold: 0.5 });

timelineItems.forEach(item => {
    observerTimeline.observe(item);
});



// JavaScript to handle slideshow
document.querySelectorAll('.slideshow').forEach(slideshow => {
    let slides = slideshow.querySelectorAll('li');
    let currentSlide = 0;

    function showSlide(n) {
        slides[currentSlide].style.display = 'none';
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].style.display = 'block';
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    // Show the next slide every 3 seconds (adjust as needed)
    setInterval(nextSlide, 3000);
});



document.addEventListener('DOMContentLoaded', function() {
    const sliders = document.querySelectorAll('.project-image-slider');

    sliders.forEach(slider => {
        let currentIndex = 0;
        const images = slider.querySelectorAll('img');

        function showImage(index) {
            images.forEach((img, i) => {
                img.classList.remove('active');
                if (i === index) {
                    img.classList.add('active');
                }
            });
        }

        function nextImage() {
            currentIndex = (currentIndex + 1) % images.length;
            showImage(currentIndex);
        }

        // Automatically switch images every 3 seconds
        setInterval(nextImage, 3000);
    });
});



let slideIndex = 0;
showSlides();

function showSlides() {
    let slides = document.getElementsByClassName("slide");
    let dots = document.getElementsByClassName("dot");

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    }

    slides[slideIndex - 1].style.display = "block";

    setTimeout(showSlides, 5000); // Change image every 5 seconds
}
