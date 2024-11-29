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
    document.getElementById('poem').innerText = selectedPoem.Poem;
    document.getElementById('emotion').innerText = `Emotion: ${selectedPoem.Emotion}`;
}

// Attach `generatePoem` to the global scope
window.generatePoem = generatePoem;
