
const diff = (source,propertyNames) => {
    
    let copy = { ...source };
    for (let prop of Object.keys(propertyNames)) {
     delete copy[prop];
    }
   return copy;
};

let ol = { r: 0, g: 0, b: 0, a: 0};
 
let  withoutOpacity = { a: null};


let objectWithoutOpacity = diff(ol, withoutOpacity);
console.log(objectWithoutOpacity);
console.log(ol === objectWithoutOpacity); // false

// console.log(withoutOpacity);