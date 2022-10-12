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
  items:9,
  loop:true,
  margin: 10
});

//  jQuery('.owl-carousel').trigger('play.owl.autoplay',[2000]);

//     function setSpeed(){
//         jQuery('.owl-carousel').trigger('play.owl.autoplay',[6000]);
//     }



      

// var owl = $('.owl-carousel');
// owl.owlCarousel({
//     items:4,
//     loop:true,
//     margin:10,
//     autoplay:false,
//     autoplayTimeout:1000,
//     autoplayHoverPause:true
// });
// $('.play').on('click',function(){
//     owl.trigger('play.owl.autoplay',[1000])
// })
// $('.stop').on('click',function(){
//     owl.trigger('stop.owl.autoplay')
// })