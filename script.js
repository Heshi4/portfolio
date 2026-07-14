// ── Typing Animation ──
const texts = [
    "Data Science Graduate",
    "Data Analyst",
    "BI Analyst", 
    "Automation Enthusiast"
];

let textIndex = 0;      // which phrase we're on
let charIndex = 0;      // which character we're on
let isDeleting = false; // are we typing or deleting

function type() {
    const current = texts[textIndex];
    const typedText = document.getElementById("typed-text");

    if (isDeleting) {
        // Remove one character
        typedText.textContent = current.substring(0, charIndex - 1);
        charIndex--;
    } else {
        // Add one character
        typedText.textContent = current.substring(0, charIndex + 1);
        charIndex++;
    }

    // Finished typing the whole word
    if (!isDeleting && charIndex === current.length) {
        setTimeout(() => { isDeleting = true; }, 1500); // pause before deleting
    }

    // Finished deleting
    if (isDeleting && charIndex === 0) {
        isDeleting = false;
        textIndex = (textIndex + 1) % texts.length; // move to next phrase
    }

    // Speed — typing is slower than deleting
    const speed = isDeleting ? 50 : 100;
    setTimeout(type, speed);
}

// Start the animation when page loads
document.addEventListener("DOMContentLoaded", type);