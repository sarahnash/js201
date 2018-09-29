// Write a function "makeSquare" which is given a size and returns a square of
// that size using asterisks.
// Example:
// makeSquare(5)
// *****
// *****
// *****
// *****
// *****
//

function makeSquare(squareSize) {
  var mySquare = "";
  for (var j = 0; j < squareSize; j++) {
    var myLines = "";
    for (var i = 0; i < squareSize; i++) {
      myLines = myLines + "*";
    }
    mySquare = mySquare + myLines + "\n";
  }
  return (mySquare = mySquare.substring(0, mySquare.length - 1));
}

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBox" which is given a width and height and returns a
// hollow box of those dimensions.
// Example:
// makeBox(6, 4)
// ******
// *    *
// *    *
// ******
//
//

function makeBox(width, height) {
  for (var a = 0; a < width; a++) {
    if (width === 0 || height === 0) {
      return '';
    } else {
      var finalLine = "";
      for (var p = 0; p < width; p++) {
        finalLine = finalLine + "*";
      }
      var multiplemiddle = "";
      for (var d = 0; d < height - 2; d++) {
        var middleLines = "";
        for (var j = 0; j < height; j++) {
          var middle = "";
          for (var r = 0; r < width - 2; r++) {
            middle = middle + " ";
          }
          middleLines = "*" + middle + "*";
        }
        multiplemiddle = multiplemiddle + middleLines + "\n";
      }
      var firstLine = "";
      for (var i = 0; i < width; i++) {
        firstLine = firstLine + "*";
      }
      return firstLine + "\n" + multiplemiddle + finalLine;
    }
  }
}

console.log(makeBox(1, 1));

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************

function makeBanner(text) {
  for (var a = 0; a < text.length; a++) {
    var finalLine = "";
    for (var i = 0; i < text.length + 2; i++) {
      finalLine = finalLine + "*";
    }
    var firstLine = "";
    for (var i = 0; i < text.length + 2; i++) {
      firstLine = firstLine + "*";
    }
    return firstLine + "\n" + "*" + text + "*" + "\n" + finalLine;
  }
}

