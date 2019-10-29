
function onButtonClick(){
	document.getElementById('textInput').className="show";
  }
  
  var credit = 0;
  var status = "";
  
	getSlotPrices= function() {
		return [0.8, 1.2, 0.9, 1, 1.5];
	};

	tryDispenseProduct= function(slot) {
		return (slot !== 1);
	},
	tryDispenseCoin=function(value) {
		return true;
	}
  

  

  var slotPrices = getSlotPrices();
  var coinDenominations = [2, 1, 0.5, 0.2, 0.1, 0.05];

	insertCoin = function(value) {
	incrementCredit(value);

	document.getElementById("lolz").value=value;
	}


		// when the user enters a selection from the KeyBoard
		   selectSlot = function(slot) {
			if (!isSlotValid(slot)) return;
			var price = getSlotPrice(slot);
			if (!hasSufficientCredit(price)) return;
			if (!dispenseProduct(slot)) return;
			decrementCredit(price);
			flashStatus("Enjoy!");
		}


		function isSlotValid(slot) {
			if (slot < slotPrices.length) return true;
			flashStatus("Invalid"); return false;
		}
		
		function getSlotPrice(slot) {
			return slotPrices[slot];
		}
	
		function hasSufficientCredit(price) {
			if (credit >= price) return true;
			flashPrice(price); return false; 
		}
		
		function dispenseProduct(slot) {
			if (tryDispenseProduct(slot)){
				return true;
			} 
			flashStatus("Empty"); return false; 
		}


		dispenseChange = function() {
		coinDenominations.forEach(function(value) {
			while (dispenseCoin(value)) { };
		});


	if (credit > 0) 
		flashStatus("No Coin"); 
	}
	
	function dispenseCoin(value) {
		if (value > credit) return false; // when the value is too big
		if (!tryDispenseCoin(value)) return false; // If there are no coins left
		decrementCredit(value); return true; // All coin dispensed --OK
	}

	incrementCredit=function  (value) {
		credit += value;
		roundTwoDecimals();
	}
	
	 decrementCredit=function (value) {
		credit -= value;
		roundTwoDecimals();
	}
	
	function roundTwoDecimals() {
		credit = Math.round(credit * 100) / 100
				// To round the value

	}
	
	function flashPrice(price) {
		flashStatus(price); 
	}
	
	function flashStatus(message) {
		status = message;
		document.getElementById('stat').value=status;
		setTimeout(function() {status = ""; }, 
		1000); 
	}
	

