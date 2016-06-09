$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#number").val();

    var romanSymbols = ["I", "V", "X", "L", "C", "D", "M"];
    var romanValues = [1, 5, 10, 50, 100, 500, 1000];

    if (numberInput === "1") {
      var romanOne = "I";
      alert(romanOne);
    } else if (numberInput === "2") {
      var romanTwo = "II";
      alert(romanTwo);
    } else if (numberInput ==="3") {
      var romanThree = "III";
      alert(romanThree);
    } else if (numberInput === "4") {
      var romanFour = 
      alert(romanFour);
    } else if (numberInput === "5") {
      var romanFive = "V";
      alert(romanFive);
    } else if (numberInput === "6") {
      var romanSix = "VI";
      alert(romanSix);
    } else if (numberInput === "7") {
      var romanSeven = "VII";
      alert(romanSeven);
    } else if (numberInput === "8") {
      var romanEight = "VIII";
      alert(romanEight);
    // } else if (numberInput === "9") {
    //   var romanNine =
    //   alert(romanNine);
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
    } else {
      alert("Error");
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
