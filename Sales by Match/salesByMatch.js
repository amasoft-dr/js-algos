function sockMerchant(n, ar) {
  console.log('n: ', n, 'ar: ', ar);
  const groupedColorsCount = getCountByColors(ar);
  console.log('groupedColorsCount: ', groupedColorsCount);
}

function getCountByColors(ar) {
  const arr = ar.sort((a, b) => a - b);
  const colorCount = {};
  let currentNumber = 0;
  console.log('arr: ', arr);
  arr.forEach((c, index) => {
    if (currentNumber === c) {
      colorCount[c] += 1;
      if (currentNumber) {
      } else {
      }
    } else {
      colorCount[c] = 1;
      currentNumber = c;
    }
  });
  return colorCount;
}

sockMerchant(9, [10, 20, 20, 10, 10, 30, 50, 10, 20]);
