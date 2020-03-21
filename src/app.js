// switching menu 

const nav = document.getElementById('nav-anchors');
let navAnchors = nav.querySelectorAll('a');
nav.addEventListener('click', event => {
    if(event.target.classList.contains("nav-element")){
    navAnchors.forEach(el => el.classList.remove('active'));
    event.target.classList.add('active');
}
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
    if(event.target.classList.contains('pictures')){
    portfolioImgs.forEach(el => el.classList.remove("container"));
    event.target.classList.add("container");
}
})

//Portfolio image Interaction , switch tabs
let portfolioImgArr = [...portfolioImgs];

let portfolioButtons = document.querySelector(".portfolio__buttons");
let switchButtons = portfolioButtons.querySelectorAll('li');
portfolioButtons.addEventListener('click', (event) => {
    if(event.target.classList.contains('button')){
    let shuffledImgArr = shuffle(portfolioImgArr);
    [...portfolioButtons.querySelectorAll('li')].forEach(el => {el.classList.remove("switchTabs")});   
    event.target.classList.add("switchTabs");
    while (portfolioContent.firstChild) {
        portfolioContent.removeChild(portfolioContent.firstChild);
    }
    for(let i in shuffledImgArr){
        portfolioContent.appendChild(shuffledImgArr[i]);  
    }
}
});
function shuffle(arr){
	let j, temp;
	for(let i = arr.length - 1; i > 0; i--){
		j = Math.floor(Math.random()*(i + 1));
		temp = arr[j];
		arr[j] = arr[i];
		arr[i] = temp;
	}
	return arr;
}

// slider 

let slider = document.getElementsByClassName("slider")
let slides = document.querySelectorAll('.slider > div')
let arrows = document.getElementsByClassName("slider__arrow");
[...arrows].forEach(el =>{
    el.addEventListener('click', (event) => {
                  
    })
})

let slideIndex = 0;


const goTo = () => {
    if (slideIndex === 1) {
        slideIndex = 0;
    } else {
        slideIndex = 1;
    }
    if (slideIndex === 0) {
        document.querySelector('.slide-1').classList.remove('hidden-slide');
        document.querySelector('.slide-2').classList.add('hidden-slide');
    } else {
        document.querySelector('.slide-1').classList.add('hidden-slide');
        document.querySelector('.slide-2').classList.remove('hidden-slide');
    }
};

document.querySelector('#arrowLeft').addEventListener('click', goTo)
document.querySelector('#arrowRight').addEventListener('click', goTo)

const formSend = e => {
    e.preventDefault();
    let subjectValue = document.querySelector('#subject').value;
    let describeValue = document.querySelector('#describe').value;
    let subjectString = `${subjectValue === 'Singolo' ? 'Subject: Singolo' : 'No Subject'}`;
    let describeString = `${describeValue === 'Portfolio project' ? 'Description: Portfolio project' : 'No description'}`;
    alert(`The letter was sent\n${subjectString}\n${describeString}`)
};

document.querySelector('#Contact').addEventListener('submit', formSend)
