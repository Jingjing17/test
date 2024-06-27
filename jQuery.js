$(document).ready(function() {
    $('.gu').on('mouseenter', function() {
      $(this).css('transform', 'scale(1.5)');
    }).on('mouseleave', function() {
      $(this).css('transform', 'scale(1)');
    });
  });