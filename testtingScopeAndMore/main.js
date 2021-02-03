// Scoping
// const arr = [];
// for (var i = 0; i < 3; i++) {
//   arr.push(() => i);
// }
// console.log(`arr: ${arr.map((x) => x())}`);

// Array tricks
// const testArr = ['Number 1', 'Number 2'];
// testArr.length = 1;
// console.log('testArr: value:', testArr, 'Length: ', testArr.length);

//testing null for

// const length = 4;
// const numbers = [];
// for (var i = 0; i < length; i++);

// {
//   numbers.push(i + 1);
// }

// console.log('numbers: ', numbers);
// //console.log();

// function calculate(vip) {
//   var amount = 0;

//   if (vip) {
//     let amount = 1;
//   }

//   {
//     let amount = 100;
//     {
//       let amount = 1000;
//     }
//   }
//   return amount;
// }

// console.log(calculate(true));

// const obj = {
//   c: 1,
//   2: 1,
//   a: 1,
//   3: 1,
//   1: 1,
// };
// obj.b = 1;
// console.log(Object.getOwnPropertyNames(obj));

// {
//   let x = 10;
//   console.log(x);
// }
// console.log(x);

// function* gene() {
//   yield 'a';
//   yield 'z';
//   return 'b';
//   yield 'c';
// }

// const generator1 = gene();
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());
// console.log(generator1.next());

// const data = {
//   head: 'Hello from head',
//   tail: 'Hello from tail',
// };
// const response = JSON.stringify(data);
// console.log(response);
// const { head, tail } = JSON.parse(response);
//console.log('head:', head, 'tail:', tail);

// const obj = {
//   c: 1,
//   2: 1,
//   a: 1,
//   3: 1,
//   1: 1,
// };

// const fun = ({ a, c }) => console.log('a: ', a, 'c: ', c);

// fun(obj);

const getPlain = (data) =>
  data.reduce((accumulator, element) => {
    return accumulator.concat(element);
  }, []);

const store = [1, 'a', [3, 'b', 5], 6, 'b', 'c'];
const plainStore = getPlain(store);
const filteredStore = plainStore.filter(
  (f) => typeof f === 'string' || f instanceof String
);
const uniqueValues = new Set(filteredStore);
console.log([...uniqueValues]);
