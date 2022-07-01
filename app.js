// query slectors 
const myCheckBox = document.querySelector(`input[type = "checkbox"]`);
const duration = document.querySelector(".month");
const price = document.querySelector(".price .pricefix");
const range = document.querySelector(".myrange");
const mobile = document.querySelector(".mobile");
let pageView = document.querySelector(".page-view span");


window.addEventListener('DOMContentLoaded', rangeColor())

myCheckBox.addEventListener('change', function(){
    billing();
    updatePrice();
});


function billing(){
    if(myCheckBox.checked){
        duration.textContent = `/ yearly`
    }
    else{
        duration.textContent = `/monthly`
    }
};
function updatePrice(){
    if(range.value == 0){
        if(myCheckBox.checked){
            price.textContent = 0
        }else{
            price.textContent = 0
        }
        pageView.textContent = "0"
    };
    if(range.value == 1){
        if(myCheckBox.checked){
            price.textContent = 72
        }else{
            price.textContent = 8
        }
        pageView.textContent = "10k"
    };
    if(range.value == 2){
        if(myCheckBox.checked == true){
            price.textContent = 108;
        }else{
            price.textContent = 12
        }
        pageView.textContent = "50k"
    };
    if(range.value == 3){
        if(myCheckBox.checked == true){
            price.textContent = 144;
        }else{
            price.textContent = 16
        }
        pageView.textContent = "100k"
    };
    if(range.value == 4){
        if(myCheckBox.checked == true){
            price.textContent = 216;
        }else{
            price.textContent = 24
        }
        pageView.textContent = "500k"
    };
    if(range.value == 5){
        if(myCheckBox.checked == true){
            price.textContent = 324;
        }else{
            price.textContent = 36
        }
        pageView.textContent = "1M"
    };
    rangeColor()
}
range.addEventListener("input",updatePrice);


function rangeColor(){
let x = (range.value) * 20
range.style.background = ` linear-gradient(90deg ,hsl(174, 77%, 80%) ${x}% ,hsl(224, 65%, 95%) ${x-(100)}%)`
}

