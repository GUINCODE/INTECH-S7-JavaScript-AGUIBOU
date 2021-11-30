function split(sampleInput, delimiter) {
  let data = [];

  var matches = find_match(sampleInput, delimiter);

  for (var index in matches) {
    if (data[0] !== null) data.push(matches[index]);
    else data.push(delimiter + matches[index]);
  }
  return data;
}

function find_match(s,d) {
  const regiex = /([^' ']+)/g;
  return s.match(regiex);
  
  //je n'arrive pas à recuperer le parametre d de la fonction find_match, et le fournir comme pattern dans le match
}

const text = "How are you doing today, now i will ";

console.log(split(text, "are"));
// const sep = " ";
// const mySliped = console.log(split(text, sep));
