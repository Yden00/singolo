// switching menu 

const nav = document.getElementById('nav-anchors');
let navAnchors = nav.querySelectorAll('a');
nav.addEventListener('click', event => {
    navAnchors.forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
});

// turning on / off the phone

const screenLeft = document.getElementsByClassName('phoneDisplay')[0];
const phoneLeft = document.getElementsByClassName('phone')[0];
const screenRight = document.getElementsByClassName('phoneDisplay')[1];
const phoneRight = document.getElementsByClassName('phone')[1];
phoneLeft.addEventListener('click', () => {
    screenLeft.style.visibility = (screenLeft.style.visibility == "visible") ? "hidden" : "visible";
});
phoneRight.addEventListener('click', () => {
    screenRight.style.visibility = (screenRight.style.visibility == "visible") ? "hidden" : "visible";
});

// Portfolio border 5px #F06C64 

const portfolioContent = document.getElementById("content__grid-container");
let portfolioImgs = portfolioContent.querySelectorAll('img');
portfolioContent.addEventListener('click', (event) => {
    portfolioImgs.forEach(el => el.classList.remove("container"));
    event.target.classList.add("container");
})

// Portfolio switch tabs 

let portfolioButtons = document.getElementById("portfolio__buttons");
let switchButtons = portfolioButtons.querySelectorAll('li');
portfolioButtons.addEventListener('click', (event) => {
    portfolioButtons.forEach(el => {
        
    });   
})

let portfolioImgArr = [...portfolioImgs];