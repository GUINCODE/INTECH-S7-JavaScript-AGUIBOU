const padLeft = (char, str, quantity) => {
     const r= quantity-str.length
    if(quantity>str.length) {
        let chai=""
       
      for (let index = 1; index < r; index++) {
          chai +=char
      }
   
      return chai+str;
    } else return str
   
}
//test
let str = "Hello everybody";

const char = 'Q';
const quantity = 20;

console.log(padLeft(char, str, quantity));





