const cssURL = "https://cdn.jsdelivr.net/gh/KGWLC/fospp@prod/assets/dist/app.css";
const currentDate = new Date().toISOString().slice(0,10).replace(/-/g, "");
const updatedURL = cssURL + "?update=" + currentDate;

// Example of how to set it in an HTML link element dynamically
document.getElementById("myCSS").href = updatedURL;


// This function changes the background color of the body to red
function logToConsole() {
  console.log('Hiiiii');
}

// Add event listener for DOMContentLoaded to run the function after the page loads
document.addEventListener("DOMContentLoaded", logToConsole);
