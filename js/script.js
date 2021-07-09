// Variables

let hideLandingPage = document.querySelector(".landingPage");
const exploreButton = document.querySelector(".showContent");
let revealPage2 = document.querySelector(".mainPage");

// Reveal Main Page
exploreButton.addEventListener('click',(e)=>{
    e.preventDefault();
    
    $(".landingMessage").fadeOut(1000,"linear", ()=>{
        hideLandingPage.style.display = "none";
        $(".mainPage").fadeIn(1000,"linear", ()=>{

            /*===== SCROLL REVEAL ANIMATION =====*/
            const sr = ScrollReveal({
                origin: 'top',
                distance: '80px',
                duration: 2000,
                reset: true
            });


            /*SCROLL PROJECTS*/
            sr.reveal('.work__img',{interval: 200});

            /*SCROLL SKILLS*/
            sr.reveal('.skills__subtitle',{}); 
            sr.reveal('.skills__text',{}); 
            sr.reveal('.skills__data',{interval: 200}); 
            sr.reveal('.skills__img',{delay: 600});

            /*SCROLL ABOUT*/
            sr.reveal('.about__img',{}); 
            sr.reveal('.about__subtitle',{delay: 400}); 
            sr.reveal('.about__text',{delay: 400}); 

            document.body.style.overflow = "visible";
            revealPage2.style.display = "block";
            

        });
        
    })

});



/*===== MENU SHOW =====*/ 
const showMenu = (toggleId, navId) =>{
    const toggle = document.getElementById(toggleId),
    nav = document.getElementById(navId)

    if(toggle && nav){
        toggle.addEventListener('click', ()=>{
            nav.classList.toggle('show')
        })
    }
}
showMenu('nav-toggle','nav-menu')




// *============ Rotate Square on Scroll ============*
var position = $(window).scrollTop(); 

$( window ).scroll(function() {
    var scroll = $(window).scrollTop();

    if(scroll > position){
        clearTimeout($(".square").css('animation-play-state','running'));
        $(".square").css({'animation-play-state':'running','animation-direction': 'normal'}, setTimeout(function() {
            $(".square").css('animation-play-state','paused');
        }, 250));
    }

    else{
        clearTimeout($(".square").css('animation-play-state','running'));
        $(".square").css({'animation-play-state':'running','animation-direction': 'reverse'}, setTimeout(function() {
            $(".square").css('animation-play-state','paused');
        }, 250));
    }
    position = scroll;
    

});


// Custom cursor movement
const cursor = document.querySelector('.cursor');

document.addEventListener('mousemove', e => {
    cursor.setAttribute("style", "top: "+(e.clientY - 10)+"px; left: "+(e.clientX - 10)+"px;")
})


