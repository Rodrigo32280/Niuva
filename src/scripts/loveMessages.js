const messages = [
    "Te quiero con todo mi corazón",
    "Mi corazón te pertenece",
    "Tú haces brillar mi mundo",
    "Preciosaaaa",
    "Mi tipo de mujer",
    "Eres la luz de mi vida",
    "Eres mi razón para sonreír todos los días",
];
const msg = document.getElementById("welcome-message");
const randomPosition = Math.floor(Math.random() * messages.length);
msg.innerText = messages[randomPosition];