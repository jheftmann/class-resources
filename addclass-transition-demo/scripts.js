console.log('hello world!');

// wait for the document load
$(document).ready(function(){

// when i click on an element run a function
  $('.button').click(function(){

    // add a class to an element
    $('.square').toggleClass('diamond');

  });

});
