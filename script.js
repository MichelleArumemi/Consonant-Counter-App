// Add an event listener to the button element with the ID "button"
document.getElementById("button").addEventListener("click", checkConsonant);

// Define the function to check for consonants in the input
function checkConsonant() {
    // Get the user input from the textbox and convert it to lowercase for case-insensitive comparison
    const userInput = document.getElementById("textbox").value.toLowerCase();
    
    // Initialize a variable to count the number of consonants
    let consonantCount = 0;
    
    // Define an array containing consonants
    const consonants = ["b", "c", "d", "f", "g", "h", "j", "k", "l", "m", "n", "p", "q", "r", "s", "t", "v", "w", "x", "y", "z"];

    // Iterate through each character in the user input
    for (let i = 0; i < userInput.length; i++) {
        // Check if the current character is a consonant
        if (consonants.includes(userInput[i])) {
            // Increment the consonant count
            consonantCount++;
        }
    }

    // Display the result based on the consonant count
    if (consonantCount > 0) {
        document.write("This sentence has " + consonantCount + " consonant(s) in it");
    } else {
        document.write("This sentence does not have any consonants in it");
    }

    // Reload the page after displaying the result (after a 1000ms or 1-second delay)
    setTimeout(function () {
        location.reload();
    }, 1000);
}