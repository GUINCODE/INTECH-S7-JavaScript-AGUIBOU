const f = (x, y, z) => x * (y - z);

const partial=(fn, ...args)=>{
    return function (...morArgs) {  
        return fn(...args, ...morArgs)
    }

}

console.log(partial(f, 2)(3, 4));  // => -2   <=> (2 * (3 - 4))

