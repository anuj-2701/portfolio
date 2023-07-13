'use strict';

// selecting elements




// smooth scroll animation

const allLinks = document.querySelectorAll('a:link');



allLinks.forEach(function(link){
    link.addEventListener('click', function(e){
        e.preventDefault;
        const href = link.getAttribute("href");

        if(href !== "#" && href.startsWith("#")){
            const sectionEl = document.querySelector("href");

            sectionEl.scrollIntoView({behavior: "smooth"});
        }
    });
    
});



let darkMode = false;









// selecting elements for dark mode

const darkModeToggle = document.querySelector('.darkmode-div');

const darkModeImage = document.querySelector('.darkmode-logo');

const darkClassList = document.querySelectorAll(".dark");

const darkElevatedList = document.querySelectorAll('.dark-elevated');

const logoImage = document.querySelector('.logo');

const githubLogo = document.querySelector('.github-logo');


// initially i want lightmode
function initial(){
    darkClassList.forEach(function(element){
        element.classList.toggle('dark');
    });

    darkElevatedList.forEach(function(element){
        element.classList.toggle('dark-elevated');
    });
}

initial();


//  DARK MODE

darkModeToggle.addEventListener('click', function(){

    darkClassList.forEach(function(element){
        element.classList.toggle('dark');
    });
    
    darkElevatedList.forEach(function(element){
        element.classList.toggle('dark-elevated');
    });
    
    if(darkMode){
        darkModeImage.src = "icons/dark-mode-6682.png";
        logoImage.src = "icons/logo-1.png";
        githubLogo.src = "icons/github-sign.png";
    }
    else{
        darkModeImage.src = "icons/lightmode1.png";
        logoImage.src = "icons/dark_mode_logo-1.png";
        githubLogo.src = "icons/github-dark-mode-1.png";
    }
    
    darkMode = !darkMode;
});


