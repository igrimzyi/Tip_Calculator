let billPrice = 0 ;
const billInput = document.querySelector("#initialPrice"); 
const tipInput = document.querySelectorAll(".buttonTip");

const replaceAmount = document.getElementsByClassName("amountTipPerson");

for(let input of tipInput){
    input.addEventListener("click", function(){
   console.log(input.value)
    })
}
billInput.addEventListener("input", function(){
billPrice = billInput.value;
console.log(parseInt(billPrice));
})

function math(){
    let price = parseInt(billPrice) + 20 ;
    console.log(price);
}






