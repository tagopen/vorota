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
          console.log(activeItem);

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





  $("#range1").ionRangeSlider({
    type: "single",
    grid: true,
    step: 0.5,
    min: 2,
    max: 8,
    values: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8],
    hide_min_max: true,
  });
  $("#range2").ionRangeSlider({
    type: "single",
    grid: true,
    step: 0.5,
    min: 2,
    max: 8,
    values: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8],
    hide_min_max: true,
  });
  $("#range3").ionRangeSlider({
    type: "single",
    grid: true,
    step: 0.5,
    min: 2,
    max: 8,
    values: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8],
    hide_min_max: true,
  });

  $("#range4").ionRangeSlider({
    type: "single",
    grid: true,
    step: 0.5,
    min: 2,
    max: 8,
    values: [2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5, 6, 6.5, 7, 7.5, 8],
    hide_min_max: true,
  });

  // countDown
  $(function() {

  $(window).on('load', function() {
    var labels = ['weeks', 'days', 'hours', 'minutes', 'seconds'],
        nextYear = (new Date().getFullYear() + 1) + '/01/01',
        template = _.template($('#main-example-template').html()),
        currDate = '00:00:00:00:00',
        nextDate = '00:00:00:00:00',
        parser = /([0-9]{2})/gi,
        $example = $('#main-example');
    // Parse countdown string to an object
    function strfobj(str) {
        var parsed = str.match(parser),
            obj = {};
        labels.forEach(function(label, i) {
            obj[label] = parsed[i]
        });
        return obj;
    }
    // Return the time components that diffs
    function diff(obj1, obj2) {
        var diff = [];
        labels.forEach(function(key) {
            if (obj1[key] !== obj2[key]) {
                diff.push(key);
            }
        });
        return diff;
    }
    // Build the layout
    var initData = strfobj(currDate);
    labels.forEach(function(label, i) {
        $example.append(template({
            curr: initData[label],
            next: initData[label],
            label: label
        }));
    });
    // Starts the countdown
    $example.countdown(nextYear, function(event) {
        var newDate = event.strftime('%w:%d:%H:%M:%S'),
            data;
        if (newDate !== nextDate) {
            currDate = nextDate;
            nextDate = newDate;
            // Setup the data
            data = {
                'curr': strfobj(currDate),
                'next': strfobj(nextDate)
            };
            // Apply the new values to each node that changed
            diff(data.curr, data.next).forEach(function(label) {
                var selector = '.%s'.replace(/%s/, label),
                    $node = $example.find(selector);
                // Update the node
                $node.removeClass('flip');
                $node.find('.curr').text(data.curr[label]);
                $node.find('.next').text(data.next[label]);
                // Wait for a repaint to then flip
                _.delay(function($node) {
                    $node.addClass('flip');
                }, 50, $node);
            });
        }
    });
  });
  });

})(jQuery); // End of use strict
