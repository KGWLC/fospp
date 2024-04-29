// This function changes the background color of the body to red
function changeBackgroundColor() {
  document.body.style.backgroundColor = "red";
  console.log("background changed to red");
}

// Add event listener for DOMContentLoaded to run the function after the page loads
document.addEventListener("DOMContentLoaded", changeBackgroundColor);
