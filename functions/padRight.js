const padRight = (char, str, quantity) => {
  const r = quantity - str.length;
  if (quantity > str.length) {
    let chai = "";

    for (let index = 1; index < r; index++) {
      chai += char;
    }
    return str + chai;
  } else return str;
};
//test
let str = "Hello everybody";

const char = "X";
const quantity = 20;

console.log(padRight(char, str, quantity));
