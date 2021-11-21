let billPrice = 0 ;
const billInput = document.querySelector("#initialPrice"); 
const tipInput = document.querySelectorAll(".buttonTip");

const replaceAmount = document.getElementsByClassName("amountTipPerson");

tipInput.forEach(button => {
    button.addEventListener('click' , function(event){
        button.classList.remove('clicked');
         if (event.target.innerHTML == button.innerHTML){
            button.classList.add('clicked');
        }
    })
});


billInput.addEventListener("input", function(){
billPrice = billInput.value;
console.log(parseInt(billPrice));
})

function math(){
    let price = parseInt(billPrice) + 20 ;
    console.log(price);
}






