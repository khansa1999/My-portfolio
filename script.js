$(document).ready(function() {
    $(window).scroll(function()
    {
        if(this.scrollY > 20){
            $('.navbar') .addClass("sticky")
        }
    
    else {
        $('.navbar') .removeClass("sticky")
    
    }  
    })

//toggle menu /navbar script 

$('.menu-btn').click(function()
{
    $('.navbar .menu').toggleClass("active");

    
});





//typing animation script

var typed = new Typed (".typing", {
    strings :  [ "freelancer" , "Developer Front , Designer" , " Freelancer"],
    typeSpeed : 200 ,
    backspeed : 30 ,
    loop : true 
});








//download




});
let button = document.querySelector(".about .about-content .right a")
button.addEventListener("click",()=>
{
    const span =document.querySelector(".about .about-content .right a span")
button.style.paddingRight='10px';
span.style.visibility="visible";
setTimeout(()=>{
    span.style.visibility="hidden";
    button.style.transition=".3s ease-in-out"; 
    button.style.paddingRight= "0px";
},3000);

});

