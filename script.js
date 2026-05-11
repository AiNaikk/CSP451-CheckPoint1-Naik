// CSP451 CheckPoint 1 - script.js

console.log("CSP451 CheckPoint 1 loaded successfully.");

// Function to greet the user on page load
function displayWelcomeMessage() {
  const main = document.querySelector("main");
  if (main) {
    const message = document.createElement("p");
    message.textContent = "JavaScript is running on this page.";
    message.style.textAlign = "center";
    message.style.color = "#1a1a2e";
    message.style.fontWeight = "bold";
    message.style.marginTop = "1rem";
    main.appendChild(message);
  }
}

// Call the function
displayWelcomeMessage();
