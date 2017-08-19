(function($) {
  "use strict"; // Start of use strict

  // Old browser notification
  $(function() {
    $.reject({
      reject: {
        msie: 9
      },
      imagePath: 'img/icons/jReject/',
      display: [ 'chrome','firefox','safari','opera' ],
      closeCookie: true,
      cookieSettings: {
        expires: 60*60*24*365
      },
      header: 'Ваш браузер устарел!',
      paragraph1: 'Вы пользуетесь устаревшим браузером, который не поддерживает современные веб-стандарты и представляет угрозу вашей безопасности.',
      paragraph2: 'Пожалуйста, установите современный браузер:',
      closeMessage: 'Закрывая это уведомление вы соглашаетесь с тем, что сайт в вашем браузере может отображаться некорректно.',
      closeLink: 'Закрыть это уведомление',
    });
  });

  $('.implement__image').matchHeight({
    byRow: false,
    property: 'height',
    target: null,
    remove: false
  });

if( $( window ).width() < 760 ) {
  $('.fail__btn').click( function () {
    $('.fail__container').addClass('fail__container--padding');
  });
}

$('.fail__btn').click( function () {
  $('.fail__row').addClass('fail__row--visible');
});

$(window).scroll(function (){ 
  $('.animate').each(function (){
   if ($(window).scrollTop() + $(window).height() >= $(this).offset().top){
    $(this).addClass($(this).data('animation')); 
    } 
  }); 
});﻿

})(jQuery); // End of use strict