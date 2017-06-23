import permute from './permutation'

export default function filter(partition) {
	var res = [];
	for (var arr of partition) {
 	  var arr2 = permute(arr);
    var seen = {};
	  var p =[];
    p = arr2.filter( item => {
    	return seen[item] ? false : (seen[item]=true);
    })
    res.push(p)
	};	
	return res
}
