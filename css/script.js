//Hamburg Menu//
let menu = document.querySelector('#menu-icon')
let navlist = document.querySelector('.navlist')

menu.onclick = () => {
  menu.classList.toggle('bx-x');
  navlist.classList.toggle('open');
};

window.onscroll = () => {
  menu.classList.remove('bx-x');
  navlist.classList.remove('open')
}


//Scrolling Button//
const sr = ScrollReveal ({
  distance: '65px',
  duration: 2600,
  delay: 450,
  reset:true
});

sr.reveal('.hero-text',{delay:200, origin:'top'});
sr.reveal('.hero-img',{delay:450, origin:'top'});
sr.reveal('.icons',{delay:500, origin:'left'});
sr.reveal('.scroll-button',{delay:500, origin:'right'});


//Nav Scrolling Show&Hide Effect//
var lastScrollTop = 0;
    navbar = document.getElementById("navbar");

window.addEventListener("scroll", function(){
  var scrollTop = window.scrollY || this.document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop){
    navbar.style.top="-80px";} else {
      navbar.style.top="0";
    }
  }
)


