let billPrice = 0 ;
const billInput = document.querySelector("#initialPrice"); 
const tipInput = document.querySelectorAll(".buttonTip");

const replaceAmount = document.getElementsByClassName("amountTipPerson");

tipInput.forEach(button => {
    button.addEventListener('click' , function(){
        button.classList.add('clicked');
    })
});

for(let button of tipInput){
    button.addEventListener("click", function(){
        
        button.classList.add('clicked');
    })
    }
for(let button of tipInput){
button.addEventListener("onclick", function(){
    
    button.classList.add('.clicked');
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






