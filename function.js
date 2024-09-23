
document.getElementById('donate-btn').addEventListener('click',function(){

    const donate = document.getElementById('input-donate-amount').value;
    const donatenumber = parseFloat(donate)
    const balance = document.getElementById('amount').innerText;
    const balancenumber = parseFloat(balance)
    const newamount = balancenumber + donatenumber;
    document.getElementById('amount').innerText = newamount

   const totalAmount = document.getElementById('balance').innerText;
   const totalAmountNumber = parseFloat(totalAmount )
   const totalBalance = totalAmountNumber - donatenumber;
   document.getElementById('balance').innerText = totalBalance;
   
   
})

