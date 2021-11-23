let billPrice = 0 ;
const billInput = document.querySelector("#initialPrice"); 
const tipInput = document.querySelectorAll(".buttonTip");

const replaceAmount = document.getElementsByClassName("amountTipPerson");


tipInput.forEach(button => {
    button.addEventListener('click' , function(event){
       button.classList.add('clicked');
        if (event.target.classList == button.classList){
            console.log('clicked')
            button.classList.remove('clicked');
            
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






