
    // Common show history function
    function getCurrentDateTime() {
        const now = new Date();
        const year = now.getFullYear();
        const month = String(now.getMonth() + 1).padStart(2, '0'); // Months are 0-indexed
        const day = String(now.getDate()).padStart(2, '0');
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
    
        return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
    }
    function handleDonationhistory(id) {
        document.getElementById(id).addEventListener('click', function(event) {
            event.preventDefault();
            const p = document.createElement('p')
            p.innerHTML = `<p> ${donateAmount} Taka is  Donate for </p><br>
              <p> Date: ${getCurrentDateTime()}</p>`;
            document.getElementById('history-container').appendChild(p)

             } )
              };

              handleDonationhistory(donate-btn)
              handleDonationhistory(donate-btn-card2)


              handleDonationhistory(donate-btn-card3)

     