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

  var firstModalOpen = $("body").hasClass("modal-open");

  $("#confident__modal").on('hidden.bs.modal', function()
  {
    if (!firstModalOpen)
      $("body").addClass("modal-open");
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
  });

  $(function($) {
    var currentMousePos = { x: -1, y: -1 },
        prevMousePos    = {x: -1, y: -1},
        documentTop     = $(document).scrollTop();

    $(document).on('mousemove, mouseout', function(event) {
      currentMousePos.x = event.pageX;
      currentMousePos.y = event.pageY;
      documentTop = $(document).scrollTop();
        // ELSEWHERE, your code that needs to know the mouse position without an event
        if ((currentMousePos.y < prevMousePos.y) && (currentMousePos.y < documentTop + 21)) {
          $('#sibassa__modal').modal("show");
          $(document).unbind('mousemove, mouseout');
        }
        prevMousePos.x = currentMousePos.x;
        prevMousePos.y = currentMousePos.y;
      });
  });


  $(function() {
    $("[data-tabs-control]").on('click', function(e) {
      let control = $(this).data('tabs-control'),
          $tabs = $(this).closest('.tabs'),
          $item = $tabs.find('.tabs__item'),
          $currentItem = $(this).closest('.tabs__item'),
          activeItem = $currentItem.index(),
          $progressbarStatus = $tabs.find('.progressbar__status');

      if (control === 'prev') {
        $progressbarStatus.css({
          width: (100 - ~~(100 / ($item.length - 1) * (activeItem - 1))) + "%"
        });
        $item.removeClass('tabs__item--active').eq(activeItem - 1).addClass('tabs__item--active');
      } else if (control === 'next') {
        $progressbarStatus.css({
          width: (100 - ~~(100 / ($item.length - 1) * (activeItem + 1))) + "%"
        });
        $item.removeClass('tabs__item--active').eq(activeItem + 1).addClass('tabs__item--active');

      }
    e.preventDefault();
    });
  });

  if( $( window ).width() >= 760 ) {

    /*CSS ANIMATION*/
    $(window).scroll(function (){ 
      $('.animate').each(function (){
       if ($(window).scrollTop() + $(window).height() >= $(this).offset().top){
        $(this).addClass($(this).data('animation')); 
      } 
    }); 
    });﻿

  }

  $('.result__slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    dots: false,
    infinite: true,
    focusOnSelect: true,
    appendArrows: $('.result__dots'),
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-chevron-left" aria-hidden="true"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-chevron-right" aria-hidden="true"></i></button>',
    responsive: [
    {
      breakpoint: 1600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 960,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
    ]
  });
  
  // Range ion Slider
  $("#range1").ionRangeSlider({
    type: "single",
    grid: true,
    step: 0.5,
    min: 2,
    max: 8,
    values: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8],
    hide_min_max: true,
  });

  // Range ion Slider
  $("#range2").ionRangeSlider({
    type: "single",
    grid: true,
    step: 0.5,
    min: 2,
    max: 8,
    values: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8],
    hide_min_max: true,
  });

  // Range ion Slider
  $("#range3").ionRangeSlider({
    type: "single",
    grid: true,
    step: 0.5,
    min: 2,
    max: 8,
    values: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8],
    hide_min_max: true,
  });

  // Range ion Slider
  $("#range4").ionRangeSlider({
    type: "single",
    grid: true,
    step: 0.5,
    min: 2,
    max: 8,
    values: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8],
    hide_min_max: true,
  });

  // 
  $(function () {
    var $time = $('.form__time');
    $time.hide();
    $('.checkbox-btn__control').on('change click', function () {
      if ($(this).is('#period-2')) {
        $time.stop().fadeIn('fast');
      } else {
        $time.stop().fadeOut('fast');
      }
    });
  });

  // Countdown #1
  $(function() {
    var clock;
    clock = $('#count').FlipClock({
      clockFace: 'MinuteCounter',
      autoStart: false,
      callbacks: {
        stop: function() {
          $('.message').html('The clock has stopped!')
        }
      }
    });
    clock.setTime(60*5);
    clock.setCountdown(true);
    
    $('#estimate').on('shown.bs.modal', function (e) {
      clock.start();
    });
  });

  // Countdown #2
  $(function() {
    var clock;
    clock = $('#count2').FlipClock({
      clockFace: 'MinuteCounter',
      autoStart: false,
      callbacks: {
        stop: function() {
          $('.message').html('The clock has stopped!')
        }
      }
    });
    clock.setTime(60*5);
    clock.setCountdown(true);

    $('#sibassa__modal').on('shown.bs.modal', function (e) {
      clock.start();
    });
  });

  // Select2
  $(function() {
    function formatState (state) {
      if (!state.id) { return state.text; }
      var $state = $(
        '<span>' + state.element.dataset.content + '</span>'
        );
      return $state;
    };

    $(".select--dropdown").select2({
      templateResult: formatState,
      templateSelection: formatState,
      minimumResultsForSearch: Infinity,
    });
  });

})(jQuery); // End of use strict
