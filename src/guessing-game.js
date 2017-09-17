class GuessingGame {

    constructor() {
    	this.number = 0;
    	this.min = 0;
    	this.max = 0;
    }
    setRange(min, max) {
			this.min = min - 1;
			this.max = max + 1;
	  }
    guess() {
 			 this.number = Math.round(this.min + (this.max - this.min) / 2); 
 			 // this.number = Math.ceil(((this.max + this.min) / 2) * 10 / 10);
 			 return this.number;
    }
    lower() {
    	this.max = this.number + 1;
    }
    greater() {
    	this.min = this.number - 1;
    }
}

module.exports = GuessingGame;
