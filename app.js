let billPrice = 0.0; 
const buttonTip = document.querySelectorAll(".buttonTip").value
const bill = document.getElementById("initialPrice")

bill.addEventListener('input', setBillPrice);
//adding class for every time button is clicked ... unfinished. 

function addClicked(event){
    buttonTip.forEach(button => {
        button.classList.remove('clicked')

        if(event.target.innerHTML == button.HTML){
            button.classList.add("clicked");
            let tipValue = parseFloat(button.value)/100;
            console.log(tipValue);
        }
        
    });
    
}
//returning value of the Bill amount that is entered by the user
function setBillPrice(){
    if(bill.value.includes(',')){
        bill.value = bill.value.replace(',','.');
    }

       return  parseFloat(bill.value);
       
    
}


