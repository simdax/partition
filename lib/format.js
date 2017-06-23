

// let io = "2^10*8^7*5^7";
// let res = '';

export default function(expr){

	var res='';
	for (var i = 0; i < expr.length; i++) {
		if (expr[i] == '^') {
			var next='', exp='';
			i++;
			while (next != '*' && next != undefined ) {
				exp += expr[i];
				i++;
				next = expr[i];
			};
			i--;
			res += `<sup>${exp}</sup>`;
		}else{
			var l=expr[i];
			if ( l=='*') {l=" x "};
			res += l;
		}
	}
	return res

}
