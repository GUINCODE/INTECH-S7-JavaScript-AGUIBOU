const increment = (x) => x + 1;
const double = (y) => y * 2;

const compose=(f,g)=>{
    return function(x){
        return f(g(x))
    }
}
const timesTwoPlusOne = compose(increment, double);

console.log(timesTwoPlusOne(5));   // => 11