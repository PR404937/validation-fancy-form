let validateForm = (e) => {

    let isFormValid = validateUserName()
        && validateEmail()
        && validatePassword()
        && validateConfirmPassword()
        && validatePasswordsMatch();

    if(isFormValid){
        alert('Form Submitted Successfully');
        return true; // to send data to the server
    }
    else{
        return false;
    }
};


// validateUserName
let validateUserName = () => {
    let usernameField = document.querySelector('#username');
    if(usernameField.value === ''){
        applyColors(usernameField);
        displayErrorMessage('User Name is Required');
        return false;
    }
    else if(usernameField.value.length < 5){
        applyColors(usernameField);
        displayErrorMessage('Min 5 letters for User Name');
        return false;
    }
    else if(!usernameField.value.match(/^[A-Za-z0-9_]{1,15}$/)){
        applyColors(usernameField);
        displayErrorMessage('No Special Characters for User Name');
        return false;
    }
    else{
        removeColors(usernameField);
        return true;
    }
};

// validateEmail
let validateEmail = () => {
    let emailField = document.querySelector('#email');
    if(emailField.value === ''){
        applyColors(emailField);
        displayErrorMessage('Email is Required');
        return false;
    }
    else{
        removeColors(emailField);
        return true;
    }
};

// validatePassword
let validatePassword = () => {
    let passwordField = document.querySelector('#password');
    if(passwordField.value === ''){
        applyColors(passwordField);
        displayErrorMessage('Password is Required');
        return false;
    }
    else{
        removeColors(passwordField);
        return true;
    }
};

// validateConfirmPassword
let validateConfirmPassword = () => {
    let confirmPasswordField = document.querySelector('#c_password');
    if(confirmPasswordField.value === ''){
        applyColors(confirmPasswordField);
        displayErrorMessage('Confirm Password is Required');
        return false;
    }
    else{
        removeColors(confirmPasswordField);
        return true;
    }
};

// validate Passwords Match
let validatePasswordsMatch = () => {
    let passwordField = document.querySelector('#password');
    let confirmPasswordField = document.querySelector('#c_password');
    if(passwordField.value !== confirmPasswordField.value){
        applyColors(passwordField);
        applyColors(confirmPasswordField);
        displayErrorMessage('Passwords are NOT Matched');
        return false;
    }
    else{
        removeColors(passwordField);
        removeColors(confirmPasswordField);
        return true;
    }
};

// apply Colors
let applyColors = (inputField) => {
    inputField.style.border = '1px solid red';
    inputField.style.boxShadow = '0 0 10px red';
};

// remove Colors
let removeColors = (inputField) => {
    inputField.style.border = '1px solid green';
    inputField.style.boxShadow = '0 0 10px green';
};


// display Error Message
let displayErrorMessage = (message) => {
    let errorMsgElement = document.querySelector('#error-msg');
    let h3Tag = document.createElement('h3');
    h3Tag.innerText = message;
    h3Tag.style.backgroundColor = 'orangered';
    errorMsgElement.appendChild(h3Tag);
    // to remove the error Message Element after 2 sec.
    setTimeout(removeErrorMessage,2000);
};

// Remove Error Message
let removeErrorMessage = () => {
    document.querySelector('#error-msg h3').remove();
};