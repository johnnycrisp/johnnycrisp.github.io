const navToggle = document.querySelector('.navbar-toggler-icon');
const navTogglerDiv = document.querySelector('.navbar-toggler');
const logoImg = document.querySelector('.navbar img');

navToggle.addEventListener('click', ()=>{
    if(navTogglerDiv.getAttribute('aria-expanded') === 'true'){
        
//            setTimeout(() => {
//    logoImg.classList.add('navbar-hide');
// }, "900")

logoImg.classList.add('navbar-hide');
        
    } else {
//          setTimeout(() => {
//    logoImg.classList.remove('navbar-hide');
// }, "800")

logoImg.classList.remove('navbar-hide');
  }
});

