$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#number").val();

    var romanSymbols = ["I", "V", "X", "L", "C", "D", "M"];
    var romanValues = [1, 5, 10, 50, 100, 500, 1000];

    if (numberInput === "5") {
      var romanFive = "V";
      alert(romanFive);
    } else if (numberInput === "10") {
      var romanTen = "X";
      alert(romanTen);
    } else if (numberInput === "50") {
      var romanFifty = "L";
      alert(romanFifty);
    } else if (numberInput === "100") {
      var romanHundred = "C";
      alert(romanHundred);
    } else if (numberInput === "500") {
      var romanFivehundred = "D";
      alert(romanFivehundred);
    } else if (numberInput === "1000") {
      var romanThousand = "M";
      alert(romanThousand);
    } else if (numberInput != "5" || numberInput != "10" || numberInput != "50" || numberInput != "100" || numberInput != "500" || numberInput != "1000") {
      for (var i = 1; i <= numberInput.length; i ++) {
        if (numberInput[i] <= "3") {

        } else if (numberInput[i] === "4") {

        } else if (numberInput[i] <= "8") {

        } else if (numberInput[i] === "9") {

        } else {
          alert("Error");
        }
      };
    } else {
      alert("Error Error");
    }
  });
});





// user interface logic
// $(document).ready(function() {
//   $("form#converter").submit(function(event) {
//     event.preventDefault();
//     var numberInput = $("input#number").val();
//     // var numberFunction = "";
//
//     // $(".roman-numeral").text(result)
//     // $("#result").show();
//
//
// // business logic
//
//     if (numberInput === "1") {
//       alert("Working!!");
//     } else {
//       alert("Failed");
//     }
//   });
// });


//
//
// var results = function(numberFunction){
//   for (var i = 0; i < numberFunction.length; i++) {
//
//   }
