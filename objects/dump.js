
const  dump=(obj)=>{
  if (typeof obj === "string") {
    return `"${obj}"`;
  }

  if (typeof obj === "number" || typeof obj === "boolean") {
    return `${obj}`;
  }

  if (Array.isArray(obj)) {
    let res = "[";
    for (let i = 0; i < obj.length; i++) {
      res += `${dump(obj[i])},`;
    }
    //remove la derniere virgule
    res = `${res.substring(0, res.length - 1)}]`;
    return res;
  }

  let res = `{`;
  for (let key in obj) {
    res += `${key}:${dump(obj[key])},`;
  }
  //remove la derniere virgule
  res = `${res.substring(0, res.length - 1)}}`;
  return res;
}


let obj = {};
obj.firstname = "Alan";
obj.lastname = "Turing";
obj.birthday = [1921, 6, 23];

console.log(dump(obj));// => {firstname:"Alan",lastname:"Turing",birthday:[1921,6,23]}


