// front end
var Whatever = require('./../js/pingpong.js').thingy;

$(document).ready(function() {
  $('#calculator').submit(function(event) {
    event.preventDefault();
    var input1 = $('#input1').val();
    var input2 = $('#input2').val();
    var operator = $("input:radio[name=operator]:checked").val();
    var simpleCalculator = new Whatever("hot pink");
    if (operator === "add") {
      result = simpleCalculator.add(input1, input2);
    } else if (operator === "subtract") {
      result = simpleCalculator.subtract(input1, input2);
    } else if (operator === "multiply") {
      result = simpleCalculator.multiply(input1, input2);
    } else if (operator === "divide") {
      result = simpleCalculator.divide(input1, input2);
    }
    var simpleCalculator1 = new Whatever("hot pink");
    var output = simpleCalculator1.pingPong(result);
    output.forEach(function(element) {
      $('#output').append("<li>" + element + "</li>");
    });
  });
});
