let messageclosed = false;

let closeMessage = function(){
    if(messageclosed == true)return;
    document.querySelector(".user__prompt").style.visibility = "hidden";
    messageclosed = true;
}

window.onload = function(){
    setTimeout(closeMessage, 3000);
}

window.onscroll = function(){
    closeMessage();
}

/* 
SHOW MENU
*/
const menu = document.querySelector('#nav-menu');
const openMenu = document.querySelector('#nav-toggle');
const closeMenu = document.querySelector('#nav-close');

if(openMenu){
    openMenu.addEventListener('click', function(){
        menu.classList.add('show-menu');
        closeMessage();
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

    if(width < 912){
        const element = document.getElementById('contact');
        element.scrollIntoView({behavior: 'smooth' });
    }
    else{
        const element = document.getElementById('contact-laptop');
        element.scrollIntoView({behavior: 'smooth' });
    }
}

let currentMode = 1;
function switchModes(){
    if(currentMode == 1){
        document.querySelector(".darkmodediv").innerHTML = '<ion-icon name="sunny-outline"></ion-icon> Light Mode';
        document.documentElement.style.setProperty('--body-color', 'rgb(44, 44, 44)');
        document.documentElement.style.setProperty('--title-color', 'hsl(0, 0%, 86%)');
        document.documentElement.style.setProperty('--text-color', 'hsl(0, 0%, 86%)');
        document.documentElement.style.setProperty('--text-color-light', 'hsl(0, 9%, 68%)');
        document.documentElement.style.setProperty('--nav-menu-var', '0 7.5px 15px rgb(71, 71, 71)');
        document.documentElement.style.setProperty('--floating-tiles-background', '#2c2c2c');
        document.documentElement.style.setProperty('--about-box-shadoww', '10px 10px 45px #0c0c0c,-10px -10px 45px #414141');
        document.documentElement.style.setProperty('--school-box-shadoww', '20px 20px 45px #0c0c0c,-20px -20px 45px #414141');
        document.documentElement.style.setProperty('--projects-box-shadoww', '15px 15px 35px #0c0c0c,-15px -15px 35px #414141');
        document.documentElement.style.setProperty('--footer-box-shadoww', '20px 20px 45px #0c0c0c,-20px -20px 45px #414141');
        document.documentElement.style.setProperty('--desktops-three-tile-box-shadoww', '10px 10px 35px #0c0c0c,-10px -10px 35px #414141');
        currentMode = 0;
    }
    else if(currentMode == 0){
        document.querySelector(".darkmodediv").innerHTML = '<ion-icon name="moon-outline"></ion-icon> Dark Mode';
        document.documentElement.style.setProperty('--body-color', 'rgb(230, 204, 255)');
        document.documentElement.style.setProperty('--title-color', 'hsl(0, 8%, 15%)');
        document.documentElement.style.setProperty('--text-color', 'hsl(0, 8%, 45%)');
        document.documentElement.style.setProperty('--text-color-light', 'hsl(0, 8%, 65%)');
        document.documentElement.style.setProperty('--nav-menu-var', '0 7.5px 15px #fff');
        document.documentElement.style.setProperty('--floating-tiles-background', '#e6ccff');
        document.documentElement.style.setProperty('--about-box-shadoww', '10px 10px 45px #ad99bf,-10px -10px 45px #ffffff');
        document.documentElement.style.setProperty('--school-box-shadoww', '20px 20px 45px #ad99bf,-20px -20px 45px #ffffff');
        document.documentElement.style.setProperty('--projects-box-shadoww', '15px 15px 35px #ad99bf,-15px -15px 35px #ffffff');
        document.documentElement.style.setProperty('--footer-box-shadoww', '20px 20px 45px #ad99bf,-20px -20px 45px #ffffff');
        document.documentElement.style.setProperty('--desktops-three-tile-box-shadoww', '10px 10px 35px #ad99bf,-10px -10px 35px #ffffff');
        currentMode = 1;
    }
}