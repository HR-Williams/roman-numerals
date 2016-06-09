

//user interface logic
$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var userInput = $("input#number").val();


    $("#roman-result").text(convert(userInput));
    $("#result, #roman-result").show();
  });
});


// business logic

var convert = function(numberInput) {
  var result = "";
  //Create an empty string
  var romanSymbols = ["M", "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"];
  //Create an array of possible roman numerals up to 1000
  var numbers = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  // Create an array of possible number values
  for (var i = 0; i < numbers.length; i ++) {
    //Iterate for a length of our numbers array
    while (numberInput >= numbers[i]) {
      //While our original number is larger than our inputted numbers
//array
      result = result + romanSymbols[i];
      //Add its equivalent roman numeral to our original empty string
      numberInput = numberInput - numbers[i];
      //Subtract the value from original numer to end while loop
    }
  }
  return result;
}



// var romanSymbols = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
// var romanResult = romanSymbols[numberInput];


//SUper duper helpful shortcut code!!
// var romanSymbols = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];
// var romanResult = romanSymbols[numberInput];
