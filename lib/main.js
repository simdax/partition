import generator from './primes';
import format from './format';

function Primes (to=1, from=7) {
	this.primes = generator(to,from)
}

Primes.prototype= {
	// we can produce a formatted array
	sort(){
		var sortable = [];
		for (var vehicle in this.primes) {
		    sortable.push([vehicle, this.primes[vehicle]]);
		}
		return sortable.sort(function(a, b) {
		    return a[1] - b[1];
		});
	},
	withFormat(array){
		var res = [];
		console.log(array);
		for (var i = 0; i < array.length; i++) {
			var el = array[i];
			console.log(el);
			el[0] = format(el[0]);
			res.push(el)
		}
		return res;
	}
}

export default Primes;

// var p = new Primes();
// console.log(p.withFormat(p.sort()));