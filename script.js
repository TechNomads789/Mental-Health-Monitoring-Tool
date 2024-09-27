// Mood Test Calculation
function calculateMood() {
    const q1 = parseInt(document.getElementById('q1').value);
    const q2 = parseInt(document.getElementById('q2').value);
    const q3 = parseInt(document.getElementById('q3').value);
    
    if (isNaN(q1) || isNaN(q2) || isNaN(q3)) {
        document.getElementById('mood-score').innerHTML = 'Please rate all the statements.';
        return;
    }

    const totalScore = q1 + q2 + q3;
    const result = (totalScore / 15) * 100;

    let moodState = '';
    if (result >= 70) moodState = 'Positive';
    else if (result >= 40) moodState = 'Neutral';
    else moodState = 'Negative';

    document.getElementById('mood-score').innerHTML = `Mood Analysis Score: ${result}%. Mood: ${moodState}`;
}

// Memory Test
function hideWords() {
    document.getElementById('word-list').style.display = 'none';
    document.getElementById('recall-words').style.display = 'block';
}

function checkMemory() {
    const recallInput = document.getElementById('user-recall').value.trim().toLowerCase();
    const correctWords = ['apple', 'chair', 'tree', 'sun', 'house'];

    const recalledWords = recallInput.split(/\s+/);
    let score = 0;

    // Check how many words are correctly recalled
    recalledWords.forEach(word => {
        if (correctWords.includes(word)) {
            score++;
        }
    });

    const memoryScore = (score / correctWords.length) * 100;
    document.getElementById('memory-result').innerHTML = `Memory Recall Score: ${memoryScore}%. You remembered ${score} out of ${correctWords.length} words.`;
}

// Cognitive Test Calculation
function checkCognitive() {
    const answer1 = parseInt(document.getElementById('math1').value);
    const answer2 = parseInt(document.getElementById('math2').value);
    const answer3 = parseInt(document.getElementById('math3').value);

    if (isNaN(answer1) || isNaN(answer2) || isNaN(answer3)) {
        document.getElementById('cognitive-result').innerHTML = 'Please provide answers for all the questions.';
        return;
    }

    const correctAnswers = [8, 5, 12];
    let correctCount = 0;

    if (answer1 === correctAnswers[0]) correctCount++;
    if (answer2 === correctAnswers[1]) correctCount++;
    if (answer3 === correctAnswers[2]) correctCount++;

    const cognitiveScore = (correctCount / 3) * 100;
    document.getElementById('cognitive-result').innerHTML = `Cognitive Test Score: ${cognitiveScore}%. You answered ${correctCount} out of 3 questions correctly.`;
}

// Virtual Counseling Message Sending
function sendMessage() {
    const message = document.getElementById('message').value.trim();
    if (message === '') {
        document.getElementById('message-result').innerHTML = 'Please enter a message before sending.';
    } else {
        document.getElementById('message-result').innerHTML = `Your message has been sent to the therapist: "${message}"`;
    }
}
