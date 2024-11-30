function predictEmotion() {
    const userPoem = document.getElementById('userPoem').value.trim();

    if (!userPoem) {
        alert("Please enter a poem to predict its emotion.");
        return;
    }

    // Simple logic to "predict" the emotion based on keywords (you can replace this with a real model/API)
    const emotionKeywords = {
        happy: ["joy", "smile", "bright", "cheerful", "happy", "delight"],
        sad: ["tears", "cry", "gloom", "sorrow", "sad", "pain"],
        love: ["heart", "love", "passion", "affection", "desire"],
        anger: ["anger", "rage", "fury", "mad", "resentment"]
    };

    let detectedEmotion = "Unknown";
    for (const [emotion, keywords] of Object.entries(emotionKeywords)) {
        if (keywords.some(keyword => userPoem.toLowerCase().includes(keyword))) {
            detectedEmotion = emotion.charAt(0).toUpperCase() + emotion.slice(1);
            break;
        }
    }

    // Display the detected emotion
    document.getElementById('emotion-output').innerText = `Emotion: ${detectedEmotion}`;
}
