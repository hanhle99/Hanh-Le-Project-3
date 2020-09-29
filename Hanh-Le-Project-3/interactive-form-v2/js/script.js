/******************************************
Treehouse Techdegree:
Hanh - Le - FSJS project 3 - Interactive Form 
******************************************/

const jobRole = document.getElementById('title');
// Hide job role other
const other = document.getElementById('other-title');
other.style.display = 'none';

jobRole.addEventListener('change', (e) => {
    if (jobRole.options[5].selected){
        other.style.display = '';
    } else {
        other.style.display = 'none'
    }
});

document.getElementById('name').focus();
document.getElementById('other-title').style.display = 'none';
const name = document.getElementById('name');
const form = document.querySelector('form');
const errorDiv = document.createElement('div');
const errorList = document.createElement('ul');
const nameError = document.createElement('li');
const emailError = document.createElement('li');
const activityError = document.createElement('li');
const creditCardError = document.createElement('li');
const cvvError = document.createElement('li');
const zipError = document.createElement('li');

form.prepend(errorDiv);
errorDiv.appendChild(errorList);
errorList.appendChild(nameError);
nameError.textContent = 'Name cannot be blank.';
nameError.style.display = 'none';
errorList.appendChild(emailError);
emailError,textContent = 'Please enter a valid email address.';
emailError.style.display = 'none';
errorList.appendChild(activityError);
activityError.text = 'Please choose at least ONE activity.';
activityError.style.display = 'none';
errorList.appendChild(creditCardError);
creditCardError.textContent = 'Please enter a valid Credit Card Number.';
creditCardError.style.display = 'none';
errorList.appendChild(cvvError);
cvvError.textContent = 'Please enter a valid CVV number.';
cvvError.style.display = 'none';
errorList.appendChild(zipError);
zipError.textContent = 'Please enter a valid zip code.';
zipError.style.display = 'none';

// T-shirt section 
const selectDesign = document.querySelector('#design');
const selectColor = document.querySelector('#color');
const selectColorOption = document.createElement('option');

// Update the "color" field to read "Please select a T-shirt theme"
selectColorOption.text = 'Please select a T-shirt theme';
selectColor.appendChild(selectColorOption); 
selectColorOption.selected = true;
for (let i = 0; i < selectColor.length; i += 1 ) {
    selectColor.options[i].hidden = 'true';
}
selectDesign.options[0].selected = true;
const punJs = selectDesign.options[1];
const heartJs = selectDesign.options[2];
selectDesign.addEventListener('change', (e) => {
    selectDesign.options[0].hidden = true;
    selectColor.options[0].hidden = true;

    if (punJs.selected == true) {
        selectColorOption.selected = false;
        selectColor.options[0].selected = true;
        for(let i = 0; i < selectColor.length; i += 1) {
            if (i < 3) {
                selectColor.options[1].hidden = '';
            };
            if (i > 3 && i < 6) {
                selectColor.options[i].hidden = 'true';
            };
        };
    };
    // Hide colors in the "Color"  drop down menu
    if (heartJs.selected == true) {
        selectColor.options[3].selected = true;
        for (let i = 0; i < selectColor.length; i += 1) {
            if (i < 3) {
                selectColor.options[i].hidden = 'true';
            };
            if (i > 3 && i < 6) {
                selectColor.options[i].hidden = '';
            };
        };
    };
});


// Activity Section 
const activityValidation = () => {
    activityError.style.display = 'none';
    activityError.classList.add('textError');
    let countChecked = 0;
    for (let i = 0; i < checkBox.length; i += 1) {
        if (checkBox[i].checked) {
            countChecked += 1;
        }
    }
    if (countChecked == 0) {
        activityError.style.display = '';
    }
}

form.addEventListener('submit', (e) => {
    nameValidation();
    if (!nameValidation()) {
        e.preventDefault();
        window.scrollTo(0, 0);
    }
    emailValidation();
    if (!emailValidation()) {
        e.preventDefault();
        window.scrollTo(0, 0);
    };
    if (paymentSelect.options[1].selected) {
        creditCardValidation();
        if (!creditCardValidation()) {
            e.preventDefault()
            window.scrollTo(0, 0);
        }
    }
    activityValidation();
    if (!activityValidation())
        e.preventDefault
        window.scrollTo(0, 0);
});


// Displaying conflicting activities
const checkboxes = document.querySelectorAll('.activities input');

//Add Total input field
let runningTotal = document.createElement('INPUT');
runningTotal.setAttribute('type', 'text');
document.querySelector('.activities').appendChild(runningTotal);
let totalCost = 0;
runningTotal.setAttribute('value', `Total: $ ${totalCost}`);


// Listening for changes in the activity section 
document.querySelector('.activities').addEventListener('change', (e) => {
    const clicked = e.target;
    const clickedDate = clicked.getAttribute('data-day-and-time');//stores the date of the current item clicked 
    const clickedCost = clicked.getAttribute('data-cost');//stores the cost of the current item clicked
    

     if (clicked.checked){
        totalCost += +clickedCost;
        runningTotal.setAttribute('value', `Total: $ ${totalCost}`);
        console.log(`Total Cost: ${totalCost}`)
    } else {
        totalCost -= +clickedCost;
        runningTotal.setAttribute('value', `Total: $ ${totalCost}`);
        console.log(`Total Cost: ${totalCost}`)
    } 

    //Checkbox Loop: Checks for activity date conflicts.
    for (let i=0; i<checkboxes.length; i+=1){
        const checkboxDate = checkboxes[i].getAttribute('data-day-and-time');

        if(clickedDate === checkboxDate && clicked != checkboxes[i]){
            if (clicked.checked){ //disables checkboxes with conflicting dates
                checkboxes[i].disabled = true;
            } else {
                checkboxes[i].disabled = false;
            }
        }
    }
});

// Payment Section  
const selectPayment = document.getElementById('payment');
const creditCard = document.getElementById('credit-card');
const payPal = document.getElementById('paypal');
const bitCoin = document.getElementById('bitcoin');
selectPayment.options[1].selected = true;

selectPayment.addEventListener('change', (e) => {
    if (selectPayment.options[1].selected == true) {
        creditCard.style.display = '';
        payPal.style.display = 'none';
        bitCoin.style.display = 'none';
    }
    if (selectPayment.options[2].selected == true) {
        creditCard.style.display = 'none';
        payPal.style.display = '';
        bitCoin.style.display = 'none';
    }
    if (selectPayment.options[3].selected == true) {
        creditCard.style.display = 'none';
        payPal.style.display = 'none';
        bitCoin.style.display = '';
    }
});

/* Form Validation and Validation Messages */
const creditCardPayment = document.getElementById('cc-num');
const zipCode = document.getElementById('zip');
const cvv = document.getElementById('cvv');
const regexCreditCard = /^[0-9]{13,16}$/;
const regexZip = /^[0-9]{5}$/;
const regexCvv = /^[0-9]{3}$/;

const creditCardValidation = () => {
    if (paymentSelect.option[1].selected == true) {
        const creditCardValid = regexCreditCard.test(creditCardPayment.value);
        const zipCodeValid = regexZip.test(zipCode.value);
        const cvvValid = regexCvv.test(cvv.value);
        let pass = 0;
        creditCardError.classList.add('textError');
        zipError.classList.add('textError');
        cvvError.classList.add('textError');

        if (creditCardValid) {
            creditCardPayment.style.borderColor = 'white';
            creditCardError.style.display = 'none';
            pass += 1;
        } else {
            creditCardPayment.style.borderColor = 'red';
            creditCardError.style.display = '';
        }
        if (zipCodeValid) {
            zipCode.style.borderColor = 'white';
            zipError.style.display = 'none';
            pass += 1;
        } else {
            zipCode.style.borderColor = 'red';
            zipError.style.display = '';
        }
        if (cvvValid) {
            cvv.style.borderColor = 'white';
            cvvError.style.display = 'none';
            pass += 1;
        } else {
            cvv.style.borderColor = 'red';
            cvvError.style.display = '';
        }
        console.log(pass);
        if (pass == 0) {
            return false;
        }
    }
}
// Name validation function
const nameValidation = () => {
    const userName = name.value;
    textError.classList.add('textError');
    if (userName.length > 0) {
        name.style.borderColor = 'white';
        textError.style.display = 'none';
        return true; 
    } else {
        name.style.borderColor = 'red';
        textError.style.dispay = '';
        return false;
    }
}

// Email validation function 
const email = document.getElementById('mail');
const validationEmail = /^[^@]+@[^@.]+\.[a-z]+$/i ;
emailError.classList.add('textError');
const emailValidation = () => {
    const userEmail = email.value;
    const validEmail = validationEmail.test(userEmail);
    if (emailValid) {
        email.style.borderColor = 'white';
        emailError.style.dispay = 'none';
        return true;
    } else {
        email.style.borderColor = 'red';
        emailError.style.dispay = '';
        return false;
    }
}
