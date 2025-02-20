// Selecting DOM elements
const usernameInput = document.getElementById('username');
const saveButton = document.getElementById('save-btn');   
const clearButton = document.getElementById('clear-btn'); 
const displayName = document.getElementById('display-name'); 

// Function to save name to localStorage
function saveName() {
    const name = usernameInput.value.trim(); 
    if (name) {
        localStorage.setItem('savedName', name); 
        displayName.textContent = `Saved Name: ${name}`; 
        alert('Name saved successfully!');
    } else {
        alert('Please enter a valid name before saving.'); 
    }
}

// Function to clear the name from localStorage
function clearName() {
    localStorage.removeItem('savedName'); 
    usernameInput.value = ''; 
    displayName.textContent = 'Your Name'; 
    alert('Name cleared successfully!');
}

// Function to check localStorage and display the saved name on page load
function displaySavedName() {
    const savedName = localStorage.getItem('savedName'); 
    if (savedName) {
        displayName.textContent = `Saved Name: ${savedName}`; 
    } else {
        displayName.textContent = 'Your Name'; 
    }
}

// Add event listeners
saveButton.addEventListener('click', saveName); 
clearButton.addEventListener('click', clearName); 

// Display the saved name when the page loads
window.addEventListener('load', displaySavedName);