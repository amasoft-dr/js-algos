function main(arr) {
  const sortedArr = arr.sort((a, b) => b - a);
  const maxNumber = sortedArr[0];
  console.log(getArrayLimitedByMaxNumber(sortedArr.reverse(), maxNumber));
}

function getArrayLimitedByMaxNumber(arr, maxNumber) {
  const result = [];
  let stored = [];
  let counter = 0;

  arr.forEach((num, index) => {
    counter += num;
    if (counter <= maxNumber) {
      stored.push(num);
    } else {
      counter = num;
      result.push(stored);
      stored = [];
      stored.push(num);
      if (!arr[index + 1]) {
        result.push(stored);
      }
    }
  });
  return result;
}

main([1, 1, 2, 1, 3, 4, 2]);
