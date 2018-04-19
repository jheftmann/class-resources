var entryCount = 0;
var displayCount = 0;
var word = new Array();


$(document).ready(function() {

  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;

    //translate unicode to characters
    //https://unicodelookup.com/        
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char);


    //translate unicode to words
    createWord(char);

    //createElement(char);
  });

  //capture function keys
  $(document).on("keydown", function(e) {
    //if pressed key is a backspace
    if (e.which == 8){
      e.preventDefault();
      entryCount ++;
      displayCount --;
      console.log("entry #" + entryCount + " : " + e.which + " | BKSP. Showing " + displayCount);
      deleteElement();
    }
  });

});


function createWord(k) {
  var elem = $('#cursor');

  //if the character is space, then show the word and space
  if ( k == " "){
    
    //show word
    var tempword = '';
    //loop through word array
    for (var i=0; i<word.length; i++){
      tempword = tempword + word[i];
    }

    //if you want to compare and translate a word, this would be where you include your conditional statements
    // show word
    elem.before('<span class="inner">' + tempword + '</span>');

    displayCount ++;
    console.log("unit # " + displayCount);
    //clear word array
    word = [];
    //show space
    elem.before('<span class="inner">&nbsp;</span>');
    displayCount ++;
    console.log("unit # " + displayCount);

  }else {
    //if character is not a space, then add character to the word
    word.push(k);
  }

}

function deleteElement() {
  $(".inner").last().remove();
}