function logMood() {
    const mood = document.getElementById('mood').value;
    const log = document.getElementById('mood-log');
    const currentDate = new Date().toLocaleString();
    log.innerHTML += `<p>Mood: ${mood} logged at ${currentDate}</p>`;
}
