/*
ALPHABET:
abcdefghijklmnopqrstuvwxyz

RESULT
pan=cna

*/

function main(word = '', positions = 13) {
  const aphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
  let stack = '';

  for (let w in word) {
    const intialIndex = aphabet.indexOf(w);
    const aphabet2 = aphabet.concat(aphabet);
    stack += aphabet2[intialIndex + positions];
  }

  console.log('stack code is: ', stack);
}

main('zorro', 13);

/**
 function decodeWord(word = '', skip = 0) {
    const abc = 'abcdefghijklmnopqrstuvwxyz';
    const size = abc.length;
    const arr = [];
    
    for(let c of word) {
        const index = abc.indexOf(c);
        const sum = index + skip;
        let temp = 0;

        if(sum > size) {
            temp = sum - size;
        } else {
            temp = size - sum;
        }

        arr.push(abc.charAt(temp));
        
    }

    return arr.join('');
}

console.log('word: ', decodeWord('zorro', 
 */
