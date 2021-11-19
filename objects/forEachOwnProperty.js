
const o1 = { a: 1 };
const o2 = Object.create(o1);
o2.b = 2;
o2.c = 3;
o2.forEachOwnProperty = function() {
  let props = [];
  for (let prop of Object.keys(o2)) {
    props.push(prop);
  }
    props.pop()
  return props
};

console.log(o2.forEachOwnProperty());  // => ["b", "c"]; mais pas "a"

