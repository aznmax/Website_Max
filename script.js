let typeWrite = document.getElementById("type");

var typewriter = new Typewriter(type, {
    loop: true,
});

typewriter
    .typeString("HTML")
    .pauseFor(1000)
    .deleteAll(200)
    .typeString("CSS")
    .pauseFor(1000)
    .deleteAll(200)
    .typeString("JAVASCRIPT")
    .pauseFor(1000)
    .deleteAll(200)
    .typeString("React")
    .pauseFor(1000)
    .deleteAll(200)
    .start();

// Burger menu Toggle //

const burgerMenu = document.querySelector(".burger_menu");
const openMenu = document.querySelector(".liste_nav");




burgerMenu.addEventListener("click", function(){

openMenu.classList.toggle('liste_nav')

})