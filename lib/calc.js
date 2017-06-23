
export function calc(signatures) {
	
	let primes = [2,3,5,7,11,13,17,19,23,29];
	let phrases = [];

	for (var i = 0; i < signatures.length; i++) {
		var phrase = '';
		var signature = signatures[i];
		for (var j = 0; j < signature.length; j++) {
	 		var puissance =	signature[j];
	 		phrase += primes[j] + '^' + puissance; //(Math.pow(primes[j],puissance));
	 		if (j < signature.length -1) { phrase += '*'}
		}
		phrases.push(phrase);
	}
	return phrases;
}
