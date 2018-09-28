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

function makeSquare(squareSize){
    var mySquare = ''
    for (var j = 0; j < squareSize; j++){
        var myLines = ''
        for(var i = 0; i < squareSize; i++){
            myLines = myLines + '*'
        }
        mySquare = mySquare + myLines + '\n'
    } 
    return mySquare = mySquare.substring(0, mySquare.length - 1)
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

function makeBox(width, height){
    var firstLine = ''
        for(var i = 0; i < width; i++){
            firstLine = firstLine + '*'
        }
        return firstLine
    
    


}

console.log(makeBox(4,6))


// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// Write a function "makeBanner" which is given some text and returns a banner
// with a border surrounding the text. The border should stretch to the length
// of the text.
// Example:
// makeBanner('Welcome to DigitalCrafts')
// ****************************
// * Welcome to DigitalCrafts *
// ****************************
