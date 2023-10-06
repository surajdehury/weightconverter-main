// getting the input area
let poundInput = document.getElementById('poundInput');

// adding function to poundInput
poundInput.addEventListener('keyup',convertWeight);

// keeping the cards hidden at starting
document.getElementById('formDiv').style.visibility = 'hidden';

// function poundInput
 function convertWeight(e)
 {
   var value = e.target.value;
  
   //getting the values of the cards as soon as value is entered  
   document.getElementById('formDiv').style.visibility = 'visible';
    // getting the different classes in the card-body area
    document.querySelector('#grams').innerHTML = value*453.592;
    document.querySelector('#kiloGrams').innerHTML = value*0.453592;
    document.querySelector('#ounces').innerHTML = value*16;  
   }