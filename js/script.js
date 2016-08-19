$(function() {

  $('.search-bar span').on('click', function() {

    $('.search-text').fadeToggle();

    if ($(window).width() < 480) {
      $('.header-img').fadeToggle();
    } 

  });

});
