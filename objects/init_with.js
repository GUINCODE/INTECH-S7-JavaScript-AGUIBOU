const withZero = () =>  0
const fromZero = (index) => index;
const from42 = (index) => 42 + index;

const initWith =(size, f)=>{
    let tab=[]
    
    if (f == withZero) {
      for (let index = 0; index < size; index++) {
        tab.push(f());
      }
      return tab;
    } else if (f == fromZero) {
      for (let index = 0; index < size; index++) {
        tab.push(f(index));
      }
      return tab;
    } else {
    for (let index = 0; index < size; index++) {
    tab.push(f(index));
 }
 return tab;
    }
 
}
console.log(initWith(5, withZero));
console.log(initWith(5, fromZero));
console.log(initWith(5, from42));



