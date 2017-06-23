var IntegerPartition = require('./integer-partition');
import filter from './filter';
import calc from './calc';

var primesSigForN = (integer) => {
	return filter(IntegerPartition.zs2(integer));
}
// export default primes;

function flatten(arr) {
    return Array.prototype.concat(...arr);
}

let signatures = flatten( primesSigForN(5) );
let res = calc(signatures);

console.log(res);