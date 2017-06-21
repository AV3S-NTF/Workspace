var forwardMultiplyGate = function(x, y) { return x * y; };
x = -2, y = 3;


tweak_amount = 0.01;
best_out = -Infinity;
for (var i = 0; i < 10000; i++) {
	var try_x = x + tweak_amount * (Math.random() * 2 - 1);
	var try_y = y + tweak_amount * (Math.random() * 2 - 1);
	var out = forwardMultiplyGate(try_x, try_y);
	if (out > best_out) {
		x = try_x;
		y = try_y;
		best_out = out;
	}
	console.log("X: " + x);
	console.log("Y: " + y);
	console.log("OUT: " + out);
}