let poemData = [];

// Load the Excel file when the page loads
async function loadPoemData() {
    try {
        const response = await fetch('poem_with_Emotions.xlsx');
        const data = await response.arrayBuffer();
        const workbook = XLSX.read(data, { type: 'array' });

        // Assuming the first sheet contains the poems and emotions
        const sheetName = workbook.SheetNames[0];
        const sheet = workbook.Sheets[sheetName];

        // Convert the sheet to JSON format
        const jsonData = XLSX.utils.sheet_to_json(sheet);

        // Store the data globally for later use
        poemData = jsonData;
        console.log('Poem data loaded:', poemData);
    } catch (error) {
        console.error('Error loading the poem data:', error);
    }
}

// Function to generate a random poem
function generatePoem() {
    if (poemData.length === 0) {
        alert("Poem data not loaded yet. Please try again later.");
        return;
    }

    // Pick a random poem
    const randomIndex = Math.floor(Math.random() * poemData.length);
    const selectedPoem = poemData[randomIndex];

    // Display the poem and its emotion
    document.getElementById('Poem').innerText = selectedPoem.poem || "No poem available.";
    document.getElementById('Emotion').innerText = `Emotion: ${selectedPoem.emotion || "Unknown"}`;
}

// Call the function to load the poem data when the script runs
window.onload = loadPoemData;

// Existing function for emotion prediction based on user input
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
