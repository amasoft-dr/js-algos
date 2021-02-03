function main(){
	Array(100).fil().forEach((num, index) => {
		const indexNum = index+1;
		const fizzBuzz = getTextByDigit(indexNum);
		console.log(fizzBuzz ? fizzBuzz : indexNum);
	});
}();

function getTextByDigit(num){
	let fizzBuzz = '';
	if(num%3===0){
		fizzBuzz += 'Fizz';		
	}

	if(num%5===0){
		fizzBuzz += 'Buzz';
	}
	return fizzBuzz;
}


/*
var main = function(){
	Array(100).fill().forEach((num,index) => {
        const indexNum = index+1;
		const fizzBuzz = getTextByDigit(indexNum);
        console.log(fizzBuzz ? fizzBuzz : indexNum);
	});
}

var getTextByDigit = function(num){
	let fizzBuzz = '';
	if(num%3===0){
		fizzBuzz += 'Fizz';		
	}

	if(num%5===0){
		fizzBuzz += 'Buzz';
	}
	return fizzBuzz;
}
*/