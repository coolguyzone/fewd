$(document).ready(function() {

  function toggleContent() {

      //Toggle the 'hidden' class on the sibling 2 after the toggle switch (.inner-content)
      $(this).next().next().toggleClass('hidden');
      //Toggle between the plus and minus images
      if ($(this).hasClass('minus')){
        $(this).attr('src', 'img/plus.jpg');
        $(this).removeClass('minus');
      }
      else {
        $(this).attr('src', 'img/minus.jpg');
        $(this).addClass('minus');
      }
  }
//Toggle Switch
  $('.toggle-switch').click(toggleContent);

//navigation Triggers
  $('.contact-link').click(function() {
    $('.contact-toggle').trigger('click');
  });

  $('.wp-link').click(function() {
    $('.wp-toggle').trigger('click');
  });

  $('.resume-link').click(function() {
    $('.resume-toggle').trigger('click');
  });

  $('.sf-link').click(function() {
    $('.sf-toggle').trigger('click');
  });

  $('.about-link').click(function() {
    $('.about-toggle').trigger('click');
  });



});
