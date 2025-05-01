// JavaScript File: frontendInteraction.js

// Simulated function to handle JSON data received from Java
function handleJavaData(jsonData) {
    try {
        const data = JSON.parse(jsonData);
<<<<<<< .merge_file_6Q32xw
        console.log("Enhanced Data received from Java:", data);

        // Check for version and respond accordingly
        if (data.version) {
            console.log(`Handling version ${data.version}`);
=======
        console.log("Data received from Java for Version 2.0:", data);

        // Check for version and respond accordingly
        if (data.version === "2.0") {
            console.log("Processing Version 2.0 data");
>>>>>>> .merge_file_ZJ9MJn
            data.versionAcknowledged = true;
        }

        // Modify and respond back
<<<<<<< .merge_file_6Q32xw
        data.response = "Hello from Enhanced JavaScript!";
        data.timestamp = new Date().toISOString(); // Added a timestamp to the response
        console.log("Sending updated response back to Java:", JSON.stringify(data));
=======
        data.response = "Hello from JavaScript, Version 2.0!";
        data.timestamp = new Date().toISOString(); // Include timestamp for version 2.0
        console.log("Sending updated response for Version 2.0 back to Java:", JSON.stringify(data));
>>>>>>> .merge_file_ZJ9MJn
    } catch (error) {
        console.error("Failed to process JSON data:", error);
    }
}

// Example usage (would be triggered by the Java environment)
<<<<<<< .merge_file_6Q32xw
handleJavaData('{"name":"ChatGPT","language":"Java","version":"1.0"}');
=======
handleJavaData('{"name":"ChatGPT","language":"Java","version":"2.0"}');
>>>>>>> .merge_file_ZJ9MJn

