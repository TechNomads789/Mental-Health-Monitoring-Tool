function predictMentalHealth() {
    // Collecting inputs from the form
    const energyLevel = document.getElementById('energy-level').value;
    const sleepQuality = document.getElementById('sleep-quality').value;
    const stressLevel = document.getElementById('stress-level').value;
    const physicalActivity = document.getElementById('physical-activity').value;
    const diet = document.getElementById('diet').value;
    const socialInteraction = document.getElementById('social-interaction').value;

    let prediction = "";

    // Basic logic for mental health prediction based on inputs
    if (energyLevel === 'low' && sleepQuality === 'poor' && stressLevel === 'high') {
        prediction = "Your mental health might be suffering due to fatigue, poor sleep, and high stress levels. Consider taking time to rest and reduce stress.";
    } else if (physicalActivity === 'none' && diet === 'poor' && socialInteraction === 'low') {
        prediction = "A lack of physical activity, poor diet, and minimal social interaction may be affecting your mental well-being. Try to stay active and connected with others.";
    } else if (energyLevel === 'medium' && sleepQuality === 'average' && stressLevel === 'medium') {
        prediction = "Your mental health seems stable, but you may want to improve your sleep and stress management for better overall well-being.";
    } else if (energyLevel === 'high' && sleepQuality === 'good' && physicalActivity === 'regular') {
        prediction = "You appear to be in good mental health. Keep up the good work with your physical activity and positive habits.";
    } else {
        prediction = "Your responses suggest a balanced mental state, but be mindful of any sudden changes in your mood or stress levels.";
    }

    // Displaying the prediction result
    document.getElementById('prediction-result').innerHTML = `<p>${prediction}</p>`;
}
