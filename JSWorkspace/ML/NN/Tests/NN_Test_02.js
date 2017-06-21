var forwardMultiplyGate = function(x, y) {
	return x * y;
}

var derivativeX = function(x, y, h) {
	var xph = x + h;
	console.log(xph);
	var out = forwardMultiplyGate(x, y);
	console.log(out);
	var out2 = forwardMultiplyGate(xph, y);
	console.log(out2);
	return ((out2 - out) / h);
	console.lof((out2 - out) / h);
}

var derivativeY = function(x, y, h) {
	var yph = y + h;
	var out = forwardMultiplyGate(x, y);
	var out2 = forwardMultiplyGate(x, yph);
	return ((out2 - out) / h);
}

var x = -2, y = 3;
var h = 0.0001;
var step_size = 0.001;
//console.log("0: " + forwardMultiplyGate(x, y));
for (var i = 0; i < 10000; i++){
	var out = forwardMultiplyGate(x, y);
	//x = x + step_size * derivativeX(x, y, h);
	//y = y + step_size * derivativeY(x, y, h);
	var out_new = forwardMultiplyGate(x, y);
	//console.log((i + 1) + ": " + out_new);
}
console.log(derivativeX(-2, 3, 0.0001));