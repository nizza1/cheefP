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
/* const cursorM = document.querySelector('.cursorM');

document.addEventListener('mousemove', (e)=> {
   cursorM.style.left = e.pageX +'px';

   cursorM.style.top = e.pageY +'px';
}) */

  /*  CURSOR MENU */

/* Background animation hero */

//referencPage 

  // Get the radio buttons and articles elements
const radios = document.querySelectorAll('.radio-inputs input[type="radio"]');

const articles = document.querySelectorAll('.displayReference article');

// Show the first article by default
articles[0].style.display = 'block';


radios.forEach(radio => {
   radio.addEventListener('change', () => {

     const value = radio.value;
 
     articles.forEach(article => {
       article.style.display = article.dataset.value === value ? 'block' : 'none';
     });
   });
 });



//referencPage 