const messages = ["Estas seguro?",
    "Realmente seguro??",
    "Di que si",
    "cielo porfavor...",
    "Piensalo un poco!",
    "Si dices que no voy a llorar...",
    "Llorare muchomucho...",
    "Estare realmete mucho triste...",
    "Ya no preguntare pues :c...",
    "Di que si por favorrrrrr !"
]
let messageIndex = 0;

function handleNoClick() {
    const noButton = document.querySelector('.no-button');
    const yesButton = document.querySelector('.yes-button');
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.5}px`;
}

function handleYesClick() {
    window.location.href = "yes_page.html";
}