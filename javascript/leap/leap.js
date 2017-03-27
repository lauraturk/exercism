var Year = function(year) {
	this.year = year;
};

Year.prototype.isLeap = function() {
	let results = false;
	if(this.year % 100 === 0 && this.year % 400){
		results = false;
	} else if(this.year % 4 === 0){
		results = true;
	}
	return results;
};

module.exports = Year;
