
// constructor function called Calculator
function Calculator(skinName) {
  this.skin = skinName;
}

// method attached to above function
Calculator.prototype.pingPong = function(goal) {
  var output = [];
  for (var i = 1; i <= goal; i++) {
    if (i % 15 === 0) {
      output.push("ping-pong");
    } else if (i % 3 === 0) {
      output.push("ping");
    } else if (i % 5 === 0) {
      output.push("pong");
    } else  {
      output.push(i);
    }
  }
  return output;
};

Calculator.prototype.add = function(x,y) {
  return parseInt(x) + parseInt(y);
};
Calculator.prototype.subtract = function(x,y) {
  return x - y;
};
Calculator.prototype.multiply = function(x,y) {
  return x * y;
};
Calculator.prototype.divide = function(x,y) {
  return x / y;
};


exports.thingy = Calculator;
