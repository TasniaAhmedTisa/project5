
    // Success Modal Elements
    const successModal = document.getElementById("my_modal_5");
    const closeModalBtn = document.getElementById("closeModal");

    // Function to show the modal
    function showModal() {
        successModal.showModal();
    }

    // Close modal
    closeModalBtn.addEventListener('click', function() {
        successModal.close();
    });

    // Common donation function
    function handleDonation(buttonId, inputId, amountId) {
        document.getElementById(buttonId).addEventListener('click', function(event) {
            event.preventDefault();
            const donateAmount = parseFloat(document.getElementById(inputId).value);
            const availableAmount = parseFloat(document.getElementById(amountId).innerText);
            const totalBalance = parseFloat(document.getElementById('balance').innerText);

            if (isNaN(donateAmount) || donateAmount <= 0) {
                alert("Please enter a valid donation amount.");
                return;
            }

            if (donateAmount > totalBalance) {
                alert("Donation amount exceeds available balance.");
                return;
            }

            // Update donation and total balance
            document.getElementById(amountId).innerText = (availableAmount + donateAmount).toFixed(2);
            document.getElementById('balance').innerText = (totalBalance - donateAmount).toFixed(2);

            // Show success modal
            showModal();
        });
    }

    // Bind event listeners for each donation button
    handleDonation('donate-btn', 'input-donate-amount', 'amount');
    handleDonation('donate-btn-card2', 'input-donate-amount2', 'amount2');
    handleDonation('donate-btn-card3', 'input-donate-amount3', 'amount3');

