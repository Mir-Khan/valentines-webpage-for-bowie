const yesButton = document.getElementById('yes-button');
const noButton = document.getElementById('no-button');
const proposalImage = document.getElementById('proposal-image');
const mainHeading = document.querySelector('h1');

let fontSize = 16; // Initial font size for the Yes button
let noClickCount = 0; // Counter for 'No' clicks

// Add your text messages here to cycle through
const noTexts = [
    "Are you really sure?",
    "Think about it a little haha",
    "Don't break my heart! 💔",
    "I'm going to cry 😭",
    "I'm going to end it all..... just kidding, but please say Yes!",
    "Yes",
    "You were always the smart one <3 Please say yes this time PLEASE PLEASE"
];

const yesTexts = [
    "Yes, of course!",
    "<3 <3 <3",
    "PLEASE PLEASE PLEASE PLEASE",
    "I'll forget about all the No's <3",
    "YIPEEEEE",
    "Yes",
    "Okay this is the yes button, I apologize for using deception and subterfuge. Please say yes!!!"
];

// Add your image paths here to cycle through
const noImages = [
    'images/crying_emoji.avif',
    'images/sad_cat.avif',
    'images/pleading_face.avif',
    'images/broken_heart.avif',
    'images/13th_reason.avif',
    'images/wario_boom.avif',
    'images/kermit_jump.avif'
];

noButton.addEventListener('click', () => {
    // 1. Cycle through images
    const imageIndex = noClickCount % noImages.length;
    proposalImage.src = noImages[imageIndex];

    // 2. Cycle through text
    const textIndex = noClickCount % noTexts.length;
    noClickCount++;

    // 3. Increase the size of the 'Yes' button
    fontSize += 5;
    yesButton.style.fontSize = fontSize + 'px';
    yesButton.style.padding = (fontSize / 2) + 'px ' + fontSize + 'px';
    
    noButton.textContent = noTexts[textIndex];
    yesButton.textContent = yesTexts[textIndex];
});

yesButton.addEventListener('click', () => {
    mainHeading.textContent = "Yay! Happy Valentine's Day!";
    proposalImage.src = 'images/celebration.avif'; // The exact "Yes" image you want
    document.querySelector('.buttons').style.display = 'none';
});