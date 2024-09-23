//console.log('file added')
function getInputFieldValueById(id){
    const donate = document.getElementById(id).value;
  
    const donatenumber = parseFloat(donate)
    const balance = document.getElementById(id).innerText;
    const balancenumber = parseFloat(balance)
    const newamount = balancenumber + donatenumber;
    document.getElementById(id).innerText = newamount

   const totalAmount = document.getElementById(id).innerText;
   const totalAmountNumber = parseFloat(totalAmount )
   const totalBalance = totalAmountNumber - donatenumber;
   document.getElementById(id).innerText = totalBalance;
   
}