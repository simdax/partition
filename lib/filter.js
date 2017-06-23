import permute from './permutation'
import {isEqual} from 'lodash'

export default function filter(partition) {
	var res = [];
	for (var arr of partition) {
		if (arr.length==0) {return }
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
