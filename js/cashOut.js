document.getElementById('btn-cash-out').addEventListener('click', function (event) {
    event.preventDefault();

    const cashOutAmount = document.getElementById('input-cash-out').value;
    const cashOutAmountNumber = parseFloat(cashOutAmount);
    const cashOutPin = document.getElementById('input-cash-out-pin').value;

    if (cashOutPin === '1234') {
        const balance = document.getElementById('account-balance').innerText;
        const balanceNumber = parseFloat(balance);
        
        const newBalance = balanceNumber - cashOutAmountNumber;

        document.getElementById('account-balance').innerText = newBalance;
    } else {
        alert('Something went wrong. Please try again later.');
    }
});