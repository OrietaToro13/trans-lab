/* Holiii acá va tu código también */
/*index2.html*/
$(".button-collapse").sideNav();

/*dropdown*/
$('.dropdown_click').click(function() {
  $('.dropdown').each(function() {
    if ($(this).find('p').css('display') == 'block')
      $(this).parent().find('p').hide('slow');
  });
  if ($(this).parent().find('p').css('display') == 'none')
    $(this).parent().find('p').show('slow');
  else $(this).parent().find('p').hide('slow');
});