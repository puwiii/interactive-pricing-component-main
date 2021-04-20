let slider = document.getElementById("myRange");
let value = document.getElementById("value");
let pageReviews = document.getElementById("pageReviews");
let yearlyToggle = document.getElementById("yearlyToggle")
let aux = 0;

var prices = [8, 12, 16, 24, 36];

slider.oninput = setPrice()

slider.addEventListener("mousemove", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) '+ (x*25) +'%, hsl(224, 65%, 95%) ' + (x*25) +'%)';
    slider.style.background = color;
    setPrice();
})

slider.addEventListener('touchend',()=>{
    var x = slider.value;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) '+ (x*25) +'%, hsl(224, 65%, 95%) ' + (x*25) +'%)';
    slider.style.background = color;
    setPrice();
})

// slider.addEventListener('touchmove', function(){
//     var x = slider.value;
//     var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) '+ (x*25) +'%, hsl(224, 65%, 95%) ' + (x*25) +'%)';
//     slider.style.background = color;
//     console.log("apreto mobile");
//     setPrice();
// })

slider.addEventListener("drag", function(){
    var x = slider.value;
    var color = 'linear-gradient(90deg, hsl(174, 77%, 80%) '+ (x*25) +'%, hsl(224, 65%, 95%) ' + (x*25) +'%)';
    slider.style.background = color;
    setPrice();
})

yearlyToggle.addEventListener("click", function(){
    this.classList.toggle("toggle-active");
    setPrice();
})

function setPrice(){
    if(yearlyToggle.classList.contains("toggle-active"))
    {
        switch(slider.value)
        {
            case '0':
                pageReviews.innerHTML='10K'
                value.innerHTML= prices[0]*.75 +'.00';
                break;
            case '1':
                pageReviews.innerHTML='50K'
                value.innerHTML= prices[1]*.75 +'.00';
                break;
            case '2':
                pageReviews.innerHTML='100K'
                value.innerHTML= prices[2]*.75 +'.00';
                break;
            case '3':
                pageReviews.innerHTML='500K'
                value.innerHTML= prices[3]*.75 +'.00';
                break;
            case '4':
                pageReviews.innerHTML='1M'
                value.innerHTML= prices[4]*.75 +'.00';
                break;
        }
    }
    else
    {
        switch(slider.value)
        {
            case '0':
                pageReviews.innerHTML='10K'
                value.innerHTML= prices[0] +'.00'
                break;
            case '1':
                pageReviews.innerHTML='50K'
                value.innerHTML= prices[1] +'.00'
                break;
            case '2':
                pageReviews.innerHTML='100K'
                value.innerHTML= prices[2] +'.00'
                break;
            case '3':
                pageReviews.innerHTML='500K'
                value.innerHTML= prices[3] +'.00'
                break;
            case '4':
                pageReviews.innerHTML='1M'
                value.innerHTML= prices[4] +'.00'
                break;
        }
    }
}