fetch('poem_with_Emotions.xlsx')
    .then(response => {
        console.log("Fetch response status:", response.status);
        if (!response.ok) {
            throw new Error(`Failed to fetch file: ${response.statusText}`);
        }
        return response.arrayBuffer();
    })
    .then(buffer => {
        console.log("File fetched successfully. Buffer size:", buffer.byteLength);
        const workbook = XLSX.read(buffer, { type: 'array' });
        const sheetName = workbook.SheetNames[0];
        console.log("Sheet name:", sheetName);

        const worksheet = workbook.Sheets[sheetName];
        const jsonData = XLSX.utils.sheet_to_json(worksheet);
        console.log("Parsed JSON data:", jsonData);

        poems = jsonData;
    })
    .catch(error => {
        console.error("Error during file fetch or parse:", error);
    });
