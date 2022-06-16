const ham=document.querySelector('.hamburger');
const navMenu=document.querySelector('.nav-menu');

// ADD EVENT LISTENER TO OPEN
ham.addEventListener('click',function(){
    ham.classList.toggle('active');
    navMenu.classList.toggle('active');
})

// close the ham menu eventListener

const navLink = document.querySelectorAll('.nav-link');

navLink.forEach(link =>link.addEventListener('click',function(){
    ham.classList.remove('active');
    navMenu.classList.remove('active');
   
}))