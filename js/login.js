document.getElementById('button-login').addEventListener('click', function(event){
    event.preventDefault();

    const phoneNumber = document.getElementById('phone-number').value;
    const pinNumber = document.getElementById('pin-number').value;

    if(phoneNumber === '5' && pinNumber ==='1234'){
        window.location.href = '/home.html';
        console.log('You are logged in.');
    }else{
        alert('Wrong phone or pin number');
    }


    // console.log(phoneNumber, pinNumber);
});