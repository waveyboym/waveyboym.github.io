/* 
SHOW MENU
*/
const menu = document.querySelector('#nav-menu');
const openMenu = document.querySelector('#nav-toggle');
const closeMenu = document.querySelector('#nav-close');

if(openMenu){
    openMenu.addEventListener('click', function(){
        menu.classList.add('show-menu');
    });
}
if(closeMenu){
    closeMenu.addEventListener('click', function(){
        menu.classList.remove('show-menu');
    });
}


/* hide menu when clicking on object to scroll to*/
const navLink = document.querySelectorAll('.nav__link');

function linkAction(){
    const navmenu = document.querySelector('#nav-menu');
    navmenu.classList.remove('show-menu');
}
navLink.forEach( n => n.addEventListener('click', linkAction));

//interval functions do not modify !!!
let leftMostMargin = 0;
let projectnmbrInView = 1;

function scrollforward(){
    let projectsContainer = document.querySelector(".container__within");
    if(projectnmbrInView == 1){
        const slideLeftConstant = setInterval(slideLeft, 1);
        function slideLeft(){
            if(leftMostMargin < -100){  clearInterval(slideLeftConstant);}
            else if(leftMostMargin >= -100){
                projectsContainer.style.marginLeft = leftMostMargin + "vw";
                --leftMostMargin;
            }
        }
        document.querySelector(".scrollforward").style.opacity = "1";
        document.querySelector(".scrollbackwards").style.opacity = "1";
        ++projectnmbrInView;
    }
    else if(projectnmbrInView == 2){
        const slideLeftConstant = setInterval(slideLeft, 1);
        function slideLeft(){
            if(leftMostMargin < -200){  clearInterval(slideLeftConstant);}
            else if(leftMostMargin >= -200){
                projectsContainer.style.marginLeft = leftMostMargin + "vw";
                --leftMostMargin;
            }
        }
        document.querySelector(".scrollforward").style.opacity = "1";
        document.querySelector(".scrollbackwards").style.opacity = "1";
        ++projectnmbrInView;
    }
    else if(projectnmbrInView == 3){
        const slideLeftConstant = setInterval(slideLeft, 1);
        function slideLeft(){
            if(leftMostMargin < -300){  clearInterval(slideLeftConstant);}
            else if(leftMostMargin >= -300){
                projectsContainer.style.marginLeft = leftMostMargin + "vw";
                --leftMostMargin;
            }
        }
        document.querySelector(".scrollforward").style.opacity = "0";
        document.querySelector(".scrollbackwards").style.opacity = "1";
        ++projectnmbrInView;
    }
}

function scrollbackwards(){
    let projectsContainer = document.querySelector(".container__within");
    if(projectnmbrInView == 4){
        const slideRightConstant = setInterval(slideRight, 1);
        function slideRight(){
            if(leftMostMargin > -199){  clearInterval(slideRightConstant);}
            else if(leftMostMargin <= -200){
                projectsContainer.style.marginLeft = leftMostMargin + "vw";
                ++leftMostMargin;
            }
        }
        document.querySelector(".scrollforward").style.opacity = "1";
        document.querySelector(".scrollbackwards").style.opacity = "1";
        --projectnmbrInView;
    }
    else if(projectnmbrInView == 3){
        const slideRightConstant = setInterval(slideRight, 1);
        function slideRight(){
            if(leftMostMargin > -99){  clearInterval(slideRightConstant);}
            else if(leftMostMargin <= -100){
                projectsContainer.style.marginLeft = leftMostMargin + "vw";
                ++leftMostMargin;
            }
        }
        document.querySelector(".scrollforward").style.opacity = "1";
        document.querySelector(".scrollbackwards").style.opacity = "1";
        --projectnmbrInView;
    }
    else if(projectnmbrInView == 2){
        projectsContainer.style.marginLeft = "0vw";
        const slideRightConstant = setInterval(slideRight, 1);
        function slideRight(){
            if(leftMostMargin > -1){  clearInterval(slideRightConstant);}
            else if(leftMostMargin <= 0){
                projectsContainer.style.marginLeft = leftMostMargin + "vw";
                ++leftMostMargin;
            }
        }
        document.querySelector(".scrollforward").style.opacity = "1";
        document.querySelector(".scrollbackwards").style.opacity = "0";
        --projectnmbrInView;
    }
}

function determineWindowAndScroll(){
    let width = window.screen.width;
    console.log(width);

    if(width < 912){
        const element = document.getElementById('contact');
        element.scrollIntoView({behavior: 'smooth' });
    }
    else{
        const element = document.getElementById('contact-laptop');
        element.scrollIntoView({behavior: 'smooth' });
    }
}