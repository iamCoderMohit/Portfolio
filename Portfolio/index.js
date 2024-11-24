const textContainer = document.getElementById('Profession');
const baseText = "I am a ";
const roles = [
    "Innovator",
    "Strategist",
    "Mentor",
    "Engineer",
    "Technologist",
    "Visionary",
    "Entrepreneur",
    "Problem-Solver"
  ];
  
let roleIndex = 0;
let charIndex = 0;
let isDeleting = false;
let delay = 150;
let typingSpeed = 100;

function type() {
  // Construct the full text to display
  const currentRole = roles[roleIndex];
  const displayedText = baseText + currentRole.slice(0, charIndex);
  
  textContainer.textContent = displayedText;

  if (isDeleting) {
    charIndex--;
  } else {
    charIndex++;
  }

  // Handle the typing and deleting effect
  if (!isDeleting && charIndex === currentRole.length) {
    setTimeout(() => isDeleting = true, delay);
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    roleIndex = (roleIndex + 1) % roles.length;
    delay = 500; // Delay before starting the next role
  }

  // Adjust the typing speed based on whether we are typing or deleting
  setTimeout(type, isDeleting ? typingSpeed / 2 : typingSpeed);
}

// Initialize typing effect
type();
