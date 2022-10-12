const navToggle = document.querySelector('.navbar-toggler-icon');
const navTogglerDiv = document.querySelector('.navbar-toggler');
const logoImg = document.querySelector('.navbar img');

navToggle.addEventListener('click', ()=>{
    if(navTogglerDiv.getAttribute('aria-expanded') === 'true'){
        
logoImg.classList.add('navbar-hide');
logoImg.style.opacity = '0';
        
    } else {

logoImg.style.opacity = '1';
setTimeout(logoImg.classList.remove('navbar-hide'), 1000);
  }
});


$(".owl-carousel").owlCarousel({
  autoplay: true,
  autoplaySpeed: 6000,
  smartSpeed: 6000,
  slideTransition: 'linear',
  items: 9,
  autoWidth: true,
  loop:true,
  margin: 10,
  center: true
  
});
