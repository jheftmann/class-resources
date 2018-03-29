var entryCount = 0;
var displayCount = 0;

$(document).ready(function() {

  //capture key presses
  $(document).on("keypress", function(e) {
    e.preventDefault();
    entryCount ++;
    displayCount ++;

    //translate unicode to characters
    //https://unicodelookup.com/
    var char = String.fromCharCode(e.which);
    console.log("entry #" + entryCount + " : " + e.which + " | " + char + ". Showing " + displayCount);
    createElement(char);
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

function createElement(k) {
  var elem = $('#cursor');
  var output = $('.output');
  if (k == "a" || k == "A") {
    elem.before('<span class="inner">a</span>');
    output.before('<span class="inner foo">animal</span>');
  }
  if (k == "b" || k == "B") { elem.before('<span class="inner">B</span>'); }
  if (k == "c" || k == "C") { elem.before('<span class="inner"><img src="http://a.deviantart.net/avatars/i/n/infinitenyancatplz.gif"></span>'); }
  if (k == "d" || k == "D") { elem.before('<span class="inner">D</span>'); }
  if (k == "e" || k == "E") { elem.before('<span class="inner">E</span>'); }
  if (k == "f" || k == "F") { elem.before('<span class="inner">F</span>'); }
  if (k == "g" || k == "G") { elem.before('<span class="inner">G</span>'); }
  if (k == "h" || k == "H") { elem.before('<span class="inner">H</span>'); }
  if (k == "i" || k == "I") { elem.before('<span class="inner">I</span>'); }
  if (k == "j" || k == "J") { elem.before('<span class="inner">J</span>'); }
  if (k == "k" || k == "K") { elem.before('<span class="inner">K</span>'); }
  if (k == "l" || k == "L") { elem.before('<span class="inner">L</span>'); }
  if (k == "m" || k == "M") { elem.before('<span class="inner">M</span>'); }
  if (k == "n" || k == "N") { elem.before('<span class="inner">N</span>'); }
  if (k == "o" || k == "O") { elem.before('<span class="inner">O</span>'); }
  if (k == "p" || k == "P") { elem.before('<span class="inner">P</span>'); }
  if (k == "q" || k == "Q") { elem.before('<span class="inner">Q</span>'); }
  if (k == "r" || k == "R") { elem.before('<span class="inner">R</span>'); }
  if (k == "s" || k == "S") { elem.before('<span class="inner">S</span>'); }
  if (k == "t" || k == "T") { elem.before('<span class="inner">T</span>'); }
  if (k == "u" || k == "U") { elem.before('<span class="inner">U</span>'); }
  if (k == "v" || k == "V") { elem.before('<span class="inner">V</span>'); }
  if (k == "w" || k == "W") { elem.before('<span class="inner">W</span>'); }
  if (k == "x" || k == "X") { elem.before('<span class="inner">X</span>'); }
  if (k == "y" || k == "Y") { elem.before('<span class="inner">Y</span>'); }
  if (k == "z" || k == "Z") { elem.before('<span class="inner">Z</span>'); }
  if (k == " ") { elem.before('<span class="inner">&nbsp;</span>') };
}

function deleteElement() {
  $(".inner").last().remove();
}
