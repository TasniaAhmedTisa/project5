


document.getElementById('donate-btn').addEventListener('click', function(event) {
    event.preventDefault();
    const donate = document.getElementById('input-donate-amount').value;
    const donatenumber = parseFloat(donate);
    const balance = document.getElementById('amount').innerText;
    const balancenumber = parseFloat(balance);
    const totalAmount = document.getElementById('balance').innerText;
        const totalAmountNumber = parseFloat(totalAmount);
    const message = isNaN(donatenumber) ? 'Please enter a valid number.' :
        donatenumber <= 0 || donatenumber === "" ? 'The donation amount cannot be empty or negative' :
        donatenumber > totalAmountNumber ? 'Donation amount exceeds your account balance.' : '';

    if (message) {
        alert(message); 
        return;
    } else {
        const newamount = balancenumber + donatenumber;
        document.getElementById('amount').innerText = newamount;

        
        const totalBalance = totalAmountNumber - donatenumber;
        document.getElementById('balance').innerText = totalBalance;

        
        showModal();
    }
});

document.getElementById('donate-btn-card2').addEventListener('click', function(event) {
    event.preventDefault();
    const donate = document.getElementById('input-donate-amount2').value;
    const donatenumber = parseFloat(donate);
    const balance = document.getElementById('amount2').innerText;
    const balancenumber = parseFloat(balance);
    const totalAmount = document.getElementById('balance').innerText;
        const totalAmountNumber = parseFloat(totalAmount);
    const message = isNaN(donatenumber) ? 'Please enter a valid number.' :
        donatenumber <= 0 || donatenumber === "" ? 'The donation amount cannot be empty or negative' :
        donatenumber > totalAmountNumber ? 'Donation amount exceeds your account balance.' : '';

    if (message) {
        alert(message);
        return;
    } else {
        const newamount = balancenumber + donatenumber;
        document.getElementById('amount2').innerText = newamount;

    
        const totalBalance = totalAmountNumber - donatenumber;
        document.getElementById('balance').innerText = totalBalance;
        showModal();
        
    }
});

document.getElementById('donate-btn-card3').addEventListener('click', function(event) {
    event.preventDefault();
    const donate = document.getElementById('input-donate-amount3').value;
    const donatenumber = parseFloat(donate);
    const balance = document.getElementById('amount3').innerText;
    const balancenumber = parseFloat(balance);
    const totalAmount = document.getElementById('balance').innerText;
        const totalAmountNumber = parseFloat(totalAmount);
    const message = isNaN(donatenumber) ? 'Please enter a valid number.' :
        donatenumber <= 0 || donatenumber === "" ? 'The donation amount cannot be empty or negative' :
        donatenumber > totalAmountNumber ? 'Donation amount exceeds your account balance.' : '';

    if (message) {
        alert(message);
        return;
    } else {
        const newamount = balancenumber + donatenumber;
        document.getElementById('amount3').innerText = newamount;

        const totalBalance = totalAmountNumber - donatenumber;
        document.getElementById('balance').innerText = totalBalance;
        showModal();

    }
});
