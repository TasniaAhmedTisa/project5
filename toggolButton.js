function toggleButtonExclusive(activeButton, inactiveButton) {
  
    if (!activeButton.classList.contains('active')) {
       
        activeButton.classList.add('active');
        activeButton.style.backgroundColor = 'green';
        activeButton.style.color = 'white';
        
        
        inactiveButton.classList.remove('active');
        inactiveButton.style.backgroundColor = '';
        inactiveButton.style.color = '';
    }
}
document.getElementById("donationBtn").addEventListener("click", function() {
    toggleButtonExclusive(this, document.getElementById("historyBtn"));
});

document.getElementById("historyBtn").addEventListener("click", function() {
    toggleButtonExclusive(this, document.getElementById("donationBtn"));
});




