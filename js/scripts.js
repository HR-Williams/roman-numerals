$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var numberInput = $("input#number").val();

    var romanSymbols = ["I", "V", "X", "L", "C", "D", "M"];
    var romanValues = [1, 5, 10, 50, 100, 500, 1000];

    if (numberInput <= "3") {


      var result = numberInput + romanSymbols[0];
      alert(result);
    } else {
      alert("Failed");
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
