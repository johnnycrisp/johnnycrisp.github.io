const navToggle = document.querySelector('.navbar-toggler-icon');
const navTogglerDiv = document.querySelector('.navbar-toggler');
const logoImg = document.querySelector('.navbar img');

navToggle.addEventListener('click', ()=>{
    if(navTogglerDiv.getAttribute('aria-expanded') === 'true'){
        
logoImg.classList.add('navbar-hide');
logoImg.style.opacity = '0';
        
    } else {

logoImg.style.opacity = '1';
logoImg.classList.remove('navbar-hide');
  }
});

