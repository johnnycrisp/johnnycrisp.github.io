const navToggle = document.querySelector('.navbar-toggler-icon');
const navTogglerDiv = document.querySelector('.navbar-toggler');
const logoImg = document.querySelector('.navbar img');

navToggle.addEventListener('click', ()=>{
    if(navTogglerDiv.getAttribute('aria-expanded') === 'true'){
        logoImg.classList.remove('order-1');
        
    } else {
         setTimeout(() => {
   logoImg.classList.add('order-1');
}, "1000")
  }
});

