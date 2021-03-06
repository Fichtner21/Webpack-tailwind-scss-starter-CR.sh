import index from "../index.html";
// import new pages here
import page from "../page.html";

import * as MyFn from "../js/home";

import AOS from 'aos';
import 'aos/dist/aos.css';

import "../css/style.css";
import "../css/style.scss";

AOS.init({
  once: true
});

const links = document.querySelectorAll(".link");

for (const link of links) {
  link.onclick = function clickHandler(e) {
    e.preventDefault()
    const href = this.getAttribute('href')
    document.querySelector(href).scrollIntoView({ behavior: 'smooth' })
  }
}

// MyFn.showHome();

// mobile menu
const btn = document.querySelector("button.mobile-menu-button");
const menu = document.querySelector(".mobile-menu");

btn.addEventListener("click", () => {
  menu.classList.toggle("hidden");  
});

// sticky menu desktop

const header = document.getElementById('header-menu');

function addClassHeader() {
  header.classList.add("fixed-menu");
  header.classList.remove("relative");  
}

function removeClassHeader(){
  header.classList.remove("fixed-menu");
  header.classList.add("relative");  
}

window.addEventListener('scroll', function(){
  let getScrollposition = window.scrollY;
  const mediaQuery = window.matchMedia('(min-width: 1024px)');

  if(mediaQuery.matches){
    if(getScrollposition > 50){
      addClassHeader(); 
    } else {
      removeClassHeader();          
    }
  }   
});

$(document).ready(function () {
  $(window).scroll(function (e) {
    // Our logic here
    // Detect how far are we from the top of the page
    let windowTop = $(this).scrollTop();
    // Loop through every navigation menu item
    $('#header-menu > div > div > div >  ul > li > a').each(function (event) {

        // Check for the current navigation item associated section
        // Check how far the associated section is from the top
        // If the associated section is as far as the user have scrolled, add 'active' class to the item.
        if (windowTop >= $($(this).attr('href')).offset().top - 500) {
            // Remove 'active' from previously highlighted menu items
            $('#header-menu > div > div > div >  ul > li > .active').removeClass('active');

            // Highlight the current menu item by adding 'active' class
            $(this).addClass('active');
        }
    });
  });
});
