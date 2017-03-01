/**
 * Pixel2HTML - 1/1
 */

var msg = 'Pixel2HTML - 1/1';

function printLog(log){
    'use strict';
  return console && console.log(log);
}

printLog(msg);
$(".slider > div").slick({

  // normal options...
  infinite: false,
  accessibility: true,
  dots: true,

  // the magic
  responsive: [{

    breakpoint: 1024,
    settings: {
      slidesToShow: 1,
      infinite: true
    }

  }, {

    breakpoint: 600,
    settings: {
      slidesToShow: 1,
      dots: true
    }

  }, {

    breakpoint: 300,
    settings: "unslick" // destroys slick

  }]
});




