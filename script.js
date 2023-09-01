// Create a function for the loading screen
function createLoadingScreen() {
    // Create a loading div
    const loadingDiv = document.createElement("div");
    loadingDiv.style.position = "fixed";
    loadingDiv.style.top = "0";
    loadingDiv.style.left = "0";
    loadingDiv.style.width = "100%";
    loadingDiv.style.height = "100%";
    loadingDiv.style.background = "rgba(0, 0, 0, 0.7)";
    loadingDiv.style.display = "flex";
    loadingDiv.style.justifyContent = "center";
    loadingDiv.style.alignItems = "center";
    loadingDiv.style.transition = "opacity 1s";

    // Create loading text
    const loadingText = document.createElement("div");
    loadingText.textContent = "Loading...";
    loadingText.style.color = "white";
    loadingText.style.fontSize = "24px";
    loadingText.style.position = "absolute";
    loadingText.style.top = "50%";
    loadingText.style.transform = "translateY(-50%)";

    // Append loading text to the loading div
    loadingDiv.appendChild(loadingText);

    // Append the loading div to the body
    document.body.appendChild(loadingDiv);

    // Remove loading screen after 3 seconds
    setTimeout(() => {
        loadingDiv.style.opacity = "0";
        setTimeout(() => {
            // Remove the loading screen
            document.body.removeChild(loadingDiv);
        }, 1000); // 1 second for the fade out transition
    }, 3000); // 3 seconds for showing the loading text
}

// Call the createLoadingScreen function when the page loads
window.addEventListener("load", createLoadingScreen);
