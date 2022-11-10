`use strict`

const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

// CONF
let currentImageindex = 0;
const currentImageContainer = document.querySelector(`.current-image`);
const thumbsContainer = document.querySelector(`.thumbs`);

//MAIN
const templateCurrentImage = document.getElementById(`current-image`).content.cloneNode(true);

templateCurrentImage.querySelector(`img`).src = images[currentImageindex].image;
templateCurrentImage.querySelector(`img`).alt = images[currentImageindex].title;
templateCurrentImage.querySelector(`.current-image-text h3`).innerHTML = images[currentImageindex].title;
templateCurrentImage.querySelector(`.current-image-text p`).innerHTML = images[currentImageindex].text;

currentImageContainer.append(templateCurrentImage);

//THUMBS
images.forEach((elm, index) => {
    const templateThumb = document.getElementById(`thumb`).content.cloneNode(true);

    if (index === currentImageindex){
        templateThumb.querySelector(`.thumb`).classList.add(`active`);
    }
    templateThumb.querySelector(`img`).src = elm.image;
    templateThumb.querySelector(`img`).alt = elm.title;

    thumbsContainer.append(templateThumb);
})

//seleziono tutte le thumbs

const thumbs = document.querySelectorAll(`.thumb`);
console.log(thumbs)
//next slide

const btnNextSlide = document.querySelector(`.next-slide`);

btnNextSlide.addEventListener('click', function() {

    thumbs[currentImageindex].classList.remove(`active`);

    if (currentImageindex < images.length - 1){
        currentImageindex++;
    }else{
        currentImageindex = 0;
    }



    thumbs[currentImageindex].classList.add(`active`);

    currentImageContainer.querySelector(`img`).alt = images[currentImageindex].title;
    currentImageContainer.querySelector(`img`).src = images[currentImageindex].image;
    currentImageContainer.querySelector(`.current-image-text h3`).innerHTML = images[currentImageindex].title;
    currentImageContainer.querySelector(`.current-image-text p`).innerHTML = images[currentImageindex].text;

});

//prev slide

const btnPrevSlide = document.querySelector(`.prev-slide`);

btnPrevSlide.addEventListener('click', function() {

    thumbs[currentImageindex].classList.remove(`active`);

    if (currentImageindex > 0){
        currentImageindex--;
    }else{
        currentImageindex = images.length - 1;
    }



    thumbs[currentImageindex].classList.add(`active`);

    currentImageContainer.querySelector(`img`).alt = images[currentImageindex].title;
    currentImageContainer.querySelector(`img`).src = images[currentImageindex].image;
    currentImageContainer.querySelector(`.current-image-text h3`).innerHTML = images[currentImageindex].title;
    currentImageContainer.querySelector(`.current-image-text p`).innerHTML = images[currentImageindex].text;

});