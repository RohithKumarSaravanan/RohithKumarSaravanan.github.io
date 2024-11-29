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


function readExcelFile(filePath, callback) {
    // Fetch the Excel file
    fetch(filePath)
        .then(response => response.arrayBuffer())
        .then(data => {
            // Read the Excel file
            const workbook = XLSX.read(data, { type: 'array' });

            // Convert the first sheet to JSON
            const firstSheetName = workbook.SheetNames[0];
            const worksheet = workbook.Sheets[firstSheetName];
            const jsonData = XLSX.utils.sheet_to_json(worksheet);

            // Pass the JSON data to the callback
            callback(jsonData);
        })
        .catch(error => {
            console.error("Error reading the Excel file:", error);
        });
}

let poems = [];

// Load the Excel file and convert it to JSON
readExcelFile('poem_with_Emotions.xlsx', function(data) {
    poems = data;
});

function generatePoem() {
    if (poems.length === 0) {
        alert("Poems are not loaded yet. Please try again.");
        return;
    }

    // Get a random poem
    const randomIndex = Math.floor(Math.random() * poems.length);
    const selectedPoem = poems[randomIndex];

    // Display the poem and its emotion
    document.getElementById('poem').innerText = selectedPoem.Poem || "No poem text available.";
    document.getElementById('emotion').innerText = `Emotion: ${selectedPoem.Emotion || "Unknown"}`;
}


// Attach `generatePoem` to the global scope
window.generatePoem = generatePoem;
