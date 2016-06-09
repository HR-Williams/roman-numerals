// user interface logic
$(document).ready(function() {
  $("form#converter").submit(function(event){
    event.preventDefault();
    var numberInput = $("input#number").val();
    var result =
    $("#result").show();
  });
});

// business logic
