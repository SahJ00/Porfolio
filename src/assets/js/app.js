window.onload = function () {
  var navButton = document.querySelector('.navigation-button');
  var navMenu = document.querySelector('.navigation-menu');
  var win = window;

  function openMenu(event) {

    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');

    event.preventDefault();
    event.stopImmediatePropagation();
  }

  function closeMenu(event) {
    if (navButton.classList.contains('active')) {
      navButton.classList.remove('active');
      navMenu.classList.remove('active');
    }
  }
  navButton.addEventListener('click', openMenu, false);

 
  win.addEventListener('click', closeMenu, false);


  $('a[href*="#"]:not([href="#"])').click(function(){
    $('html, body').animate({
        scrollTop: $( $(this).attr('href') ).offset().top
    }, 500);
    closeMenu()
    return false;
});

}




// window.onload = function ()  {    
//   $('a[href*="#"]:not([href="#"])').click(function() {
//     if (
//       location.pathname.replace(/^\//, "") ==
//         this.pathname.replace(/^\//, "") &&
//       location.hostname == this.hostname
//     ) {
//       var target = $(this.hash);
//       target = target.length ? target : $("[name=" + this.hash.slice(1) + "]");
//       if (target.length) {
//         $("html, body").animate(
//           {
//             scrollTop: target.offset().top
//           },
//           1000
//         );
//         return false;
//       }
//     }
//   });

// };


























