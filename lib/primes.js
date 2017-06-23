var IntegerPartition = require('./integer-partition');
import filter from './filter';
import {calc} from './calc';
import ExpreEval  from './expreEval';

// WHY NOT ??????  :'( 
// ===>    function eval(n) { return ExpreEval.Parser.parse(n).evaluate() };

window.u = IntegerPartition;
var primesSigForN = (integer) => {
	return filter(IntegerPartition.zs2(integer));
}
// export default primes;

function flatten(arr) {
	if (arr == undefined) {return arr}
    return Array.prototype.concat(...arr);
}

export default function generatePrimes(from,to) {

	let Primes = {};
	for (var n = from; n < to; n++) {
		let signatures = flatten( primesSigForN(n) );
		if (signatures) {
			let phrases = calc(signatures);
			var res = [];
			for (var i = 0; i < phrases.length; i++) {
				var el =	phrases[i];
				res.push(eval(el));
				var e = ExpreEval.Parser.parse(el).evaluate();
				Primes[el] = e;
			}
		}
	}

	return Primes
}