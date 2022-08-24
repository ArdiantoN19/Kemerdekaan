//Mengambil id
const bgOne = document.getElementById("bgOne");
const bgTwo = document.getElementById("bgTwo");
const bgThree = document.getElementById("bgThree");
const bgNav = document.querySelector(".container");
const navLink = document.querySelectorAll(".nav-link");
const article = document.querySelector("article#tentang");
const underline = document.querySelector(".underline");
const rightBtn = document.getElementById("rightBtn");
const colorChoice = document.querySelector(".color-choice");
const leftBtn = document.getElementById("leftBtn");
const contactMe = document.querySelector(".contact-me");
const sidebarBtn = document.querySelector(".sidebarBtn");
const sidebarMenu = document.querySelector(".sidebarMenu");
const closeBtn = document.querySelector(".closeBtn");
const aside = document.getElementById("biodata");

// Active link with jQuery
$(document).ready(function () {
    $('.nav-menu li a.nav-link').click(function () {
        $('li a.nav-link').removeClass("active");
        $(this).addClass("active");
    });
});

// Memunculkan sidebar
sidebarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sidebarMenu.classList.add("displayMenu");
});

// Menutup sidebar
closeBtn.addEventListener("click", (e) => {
    e.preventDefault();
    sidebarMenu.classList.remove("displayMenu");
});

// Memunculkan right button untuk merubah background
rightBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    colorChoice.classList.toggle("display");
});

// Memunculkan left button untuk melakukan kontak
leftBtn.addEventListener("click", (e) =>{
    e.preventDefault();
    contactMe.classList.toggle("display");
});

// Fungsi merubah warna background
bgOne.addEventListener("click", (e) => {
    e.preventDefault();
        bgNav.classList.add("bg-1");
        bgNav.classList.remove("bg-2","bg-3");
        article.classList.add("bg-1");
        article.classList.remove("bg-2","bg-3");
        sidebarMenu.classList.add("bg-1");
        sidebarMenu.classList.remove("bg-2","bg-3");
        aside.classList.add("bg-1");
        aside.classList.remove("bg-2","bg-3");
        for(let link of navLink){
            link.classList.add("bg-1");
            link.classList.remove("bg-2","bg-3");
        }
        underline.style.backgroundColor = "#ffe898";
});

bgTwo.addEventListener("click", (e) => {
    e.preventDefault();
        bgNav.classList.add("bg-2");
        bgNav.classList.remove("bg-1","bg-3");
        article.classList.add("bg-2");
        article.classList.remove("bg-1","bg-3");
        sidebarMenu.classList.add("bg-2");
        sidebarMenu.classList.remove("bg-1","bg-3");
        aside.classList.add("bg-2");
        aside.classList.remove("bg-1","bg-3");
        for(let link of navLink){
            link.classList.add("bg-2");
            link.classList.remove("bg-1","bg-3");
        }
        underline.style.backgroundColor = "#ffe898";
});

bgThree.addEventListener("click", (e) => {
    e.preventDefault();
        bgNav.classList.add("bg-3");
        bgNav.classList.remove("bg-1","bg-2");
        article.classList.add("bg-3");
        article.classList.remove("bg-1","bg-2");
        sidebarMenu.classList.add("bg-3");
        sidebarMenu.classList.remove("bg-1","bg-2");
        aside.classList.add("bg-3");
        aside.classList.remove("bg-1","bg-2");
        underline.style.backgroundColor = "#F65A83";

        for(let link of navLink){
            link.classList.add("bg-3");
            link.classList.remove("bg-1","bg-2");
        }
});