let hideLandingPage = document.querySelector(".landingPage");
const exploreButton = document.querySelector(".showContent");
let revealPage2 = document.querySelector(".mainPage");

exploreButton.addEventListener('click',(e)=>{
    e.preventDefault();
    
    $(".landingMessage").fadeOut(1000,"linear", ()=>{
        hideLandingPage.style.display = "none";
        revealPage2.style.display = "block";
    })

});