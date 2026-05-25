// 1. Intersection Observer for Smooth Scroll Fade-In Effect
const observerOptions = {
    root: null,
    threshold: 0.1,
    rootMargin: "0px"
};

const scrollObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, observerOptions);

const animatedElements = document.querySelectorAll('.animate-on-scroll');
animatedElements.forEach((element) => scrollObserver.observe(element));

// 2. Typewriter Effect for the Hero Subtitle
const professionalTitles = [
    "Informatics Student", 
    "Full-Stack Developer", 
    "Tech Enthusiast"
];

let titleLoopCount = 0;
let characterIndex = 0;
let currentTitleString = "";
let currentLettersExcerpt = "";

function executeTypewriterEffect() {
    if (titleLoopCount === professionalTitles.length) {
        titleLoopCount = 0;
    }
    
    currentTitleString = professionalTitles[titleLoopCount];
    currentLettersExcerpt = currentTitleString.slice(0, ++characterIndex);
    
    document.getElementById('typing-text').textContent = currentLettersExcerpt;
    
    if (currentLettersExcerpt.length === currentTitleString.length) {
        titleLoopCount++;
        characterIndex = 0;
        // Pause briefly before clearing and shifting to the next phrase
        setTimeout(executeTypewriterEffect, 2200); 
    } else {
        // Typing pace interval
        setTimeout(executeTypewriterEffect, 90); 
    }
}

// Initializing scripts upon Document Object Model fully loading
document.addEventListener("DOMContentLoaded", () => {
    executeTypewriterEffect();
});