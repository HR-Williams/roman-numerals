$(document).ready(function() {
  $("form#converter").submit(function(event) {
    event.preventDefault();
    var numberInput = parseInt($("input#number").val());

    var romanSymbols = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX", "X"];

    var romanResult = romanSymbols[numberInput];

        $("#roman-result").text(romanResult);
        $("#result, #roman-result").show();

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
