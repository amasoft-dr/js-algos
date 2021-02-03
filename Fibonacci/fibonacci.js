function runFiboLoop(){

	const data = [];
	Array(15).fill().forEach((e, index) => {
		if(index >==2){
			data.push((data[data.length-2])+(data[data.length-1]));			
		}else {
			data.push(index===0?index+1:index)
		}
	});
	console.log(data);
}


function runFiboRecursion(num){	
	const data = [];	
	run(data, 0, num);
	console.log(data);
}

function run(d, count, stopper){	
	if(count < stopper){
		if(count < 2){
			d.push(count===0?count+1:count);
		}else{
			d.push((d[d.length-2]) + (d[d.length-1]));	
		}			
		count++
		return run(d, count, stopper);
	}		
}