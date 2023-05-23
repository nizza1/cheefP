/* nav */
const navButton = document.querySelector('.navButton');

const navMenu = document.querySelector('.nav');

const menuContainr = document.querySelector('.menuContainr');

let navButtonOpen = false;

navButton.addEventListener('click',()=>{
   navButton.classList.toggle('open');
   navMenu.classList.toggle('navMenuOpen');
   navButtonOpen = !navButtonOpen;
   menuContainr.classList.toggle('menuContainerOpen');
})
/* nav */


/* Background animation hero */

window.addEventListener('scroll', function() {
   const scrollPosition = window.scrollY;

   const hero = document.querySelector('.hero');

   const heroBlur = document.querySelector('.heroBlur');
   
   heroBlur.style.backdropFilter = `blur(${.04 * scrollPosition}px)`;

 });

 /*  CURSOR MENU */
const menuCursor = document.querySelector('.cursorM');

document.addEventListener('mousemove', (e)=> {
   menuCursor.style.left = e.pageX +'px';

   menuCursor.style.top = e.pageY +'px';
})

  /*  CURSOR MENU */

/* Background animation hero */
