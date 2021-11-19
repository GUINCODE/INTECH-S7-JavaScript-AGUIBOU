const restrict = (target, keep) => {
   for (let prop of Object.keys(target)) {
     if (!keep.hasOwnProperty(prop)) {
       delete target[prop];
     } 
   }
 return target;
};

const config = { user: "user", pass: "pass" };
const tooMuchConfig = {
  vars: "LOG=info",
  user: "user",
  pass: "pass",
  env: "prod",
};

console.log("vars" in tooMuchConfig); // => true
console.log("env" in tooMuchConfig); // => true

const properConfig = restrict(tooMuchConfig, config);
console.log(properConfig === config);; // => false
console.log("vars" in properConfig);; // => false
console.log("env" in properConfig);; // => false
console.log(properConfig);

