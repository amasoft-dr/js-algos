function main(brakets){
	const data = brakets.split('');
	let value = false
	
	if(areBraketQtyBalanced(data)){		
		value = checkBraketBalanced(brakets);  

	}

	return value ? 'YES' : 'NO';
}


function areBraketQtyBalanced(braketStored){
	return isTheBraketSameQty(braketStored,'{','}') &&
	isTheBraketSameQty(braketStored,'[',']') &&
	isTheBraketSameQty(braketStored,'(',')') &&
	data.lenght%2===0;

}


function isTheBraketSameQty(braketStored, openBraket, closeBraket){
	const open = braketStored.filter(braket => braket === openBraket);
	const close = braketStored.filter(braket => braket === closeBraket);
	return open.lenght === close.lenght
}


function checkBraketBalanced(stored){
    const pairsBrakets = ['[]','{}','()'];       
    const brakets = stored.split('');
    brakets.forEach((b, index) => {
        if(pairsBrakets.includes(b+brakets[index+1])){
            brakets.splice(index,2);
        }        
    });
    
    if(isThereAnyPairOfBrakets(brakets)){
        return validateBalanced(brakets.join(''))
    }else {
        return brakets.length === 0;
    }
    
}

function isThereAnyPairOfBrakets(braketStored){
    const pairsBrakets = ['[]','{}','()'];
    return braketStored.some((bs, index ) => {
        if(pairsBrakets.includes(bs+braketStored[index+1])){
            return true;
        } 
    });
}
