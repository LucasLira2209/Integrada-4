$(window).scroll(function() {
  var scroll = $(window).scrollTop();
  if (scroll >= $(window).height() *0.4) {
    $('.navbar').addClass('scrolled');
  } else {
    $('.navbar').removeClass('scrolled');
  }
});
window.onscroll = function() {
  var navbarHeight = document.querySelector('.navbar').offsetHeight;
  var dropdowns = document.querySelectorAll('.dropdown-content');
  
  dropdowns.forEach(function(dropdown) {
    if (window.pageYOffset > navbarHeight * 0.5) {
      dropdown.style.backgroundColor = 'rgba(0, 0, 0, 1)';
    } else {
      dropdown.style.backgroundColor = '#00000033';
    }
  });
};
