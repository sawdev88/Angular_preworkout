$(function() {

  $('.show-search').on('click', function() {

    $(this).hide();
    $('.hide-search').fadeIn();
    $('.search-text').fadeIn();

    if ($(window).width() < 480) {
      $('.header-img').fadeOut();
    }

  });

  $('.hide-search').on('click', function() {

    $(this).hide();
    $('.show-search').fadeIn();
    $('.search-text').fadeOut();


    if ($(window).width() < 480) {
      $('.header-img').fadeIn();
    }

  });
  
});
