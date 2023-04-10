const burgerMenu = document.querySelector('.burger');
const burgerLineFirst = burgerMenu.querySelector('.burger__item_first');
const burgerLineSecond = burgerMenu.querySelector('.burger__item_second');
const burgerLineThird = burgerMenu.querySelector('.burger__item_third');
const burgerPopup = document.querySelector('.burger__popup');
const portfolioLink = document.querySelector('.link__portfolio');
const portolioSection = document.querySelector('#portfolio');
const aboutLink = document.querySelector('.link__about');
const aboutSection = document.querySelector('#about');
const contactLink = document.querySelector('.link__contact');
const contactSection = document.querySelector('#contact');

function toggleBurgerMenu() {
    burgerLineFirst.classList.toggle("burger__item_first_opened");
    burgerLineSecond.classList.toggle("burger__item_second_opened");
    burgerLineThird.classList.toggle("burger__item_third_opened");
}

function toggleBurgerPopup() {
    burgerPopup.classList.toggle('burger__popup_opened');
}

burgerMenu.addEventListener('click', () => {
    toggleBurgerMenu();
    toggleBurgerPopup();
});

portfolioLink.addEventListener('click', (e) => {
    e.preventDefault();
    portolioSection.scrollIntoView({ behavior: "smooth", block: "start"});
})

aboutLink.addEventListener('click', (e) => {
    e.preventDefault();
    aboutSection.scrollIntoView({ behavior: "smooth", block: "start"});
})

contactLink.addEventListener('click', (e) => {
    e.preventDefault();
    contactSection.scrollIntoView({ behavior: "smooth", block: "start"});
})


