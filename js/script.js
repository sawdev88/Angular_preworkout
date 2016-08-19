$(function() {

  $('.search-bar span').on('click', function(e) {
    e.stopPropagation();

    $('.search-text').fadeToggle();

    if ($(window).width() < 480) {
      $('.header-img').fadeToggle();
    }

  });

});