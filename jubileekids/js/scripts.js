$(document).ready(function()  {
  $('.banner').parallax("50%", 1);
  
  $(window).scroll(function() {
    var scroll_top = $(window).scrollTop();
    sticky_start = $('aside').offset().top;
    sticky_end = $('footer').offset().top - $('.sub-menu').height();
    
    if (scroll_top > sticky_start && scroll_top < sticky_end) {
      $('.sub-menu').removeClass('adjust').addClass('fixed');
      $('aside').parent('div').addClass('scrolled');
    }
    else if (scroll_top >= sticky_end) {
      $('.sub-menu').removeClass('fixed').addClass('adjust');
    }
    else {
      $('.sub-menu').removeClass('fixed adjust');
      $('aside').parent('div').removeClass('scrolled');
    }
  });
});

