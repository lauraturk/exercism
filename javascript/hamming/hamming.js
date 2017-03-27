
function Hamming () {
}

Hamming.prototype.compute = function (string1, string2) {
	let stringOne = string1.split('');
	let stringTwo = string2.split('');
	var offCount = 0;

	stringTwo.forEach(function (stringOne, i){
		if(stringTwo[i] !== stringOne) {
		return offCount++;
	}	else {
		return offCount += 0;
	}
	});
	console.log(offCount)
	}


module.exports = Hamming;
