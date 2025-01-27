// * Made by John Mark B. Escorel for Intro To Computing
// * All rights reserved © 2025

let iconMenu = document.querySelector('#icon-menu');
let navbar = document.querySelector('.navbar');

iconMenu.onclick = () => {
    iconMenu.classList.toggle("bx-x")
    navbar.classList.toggle('active');
}
