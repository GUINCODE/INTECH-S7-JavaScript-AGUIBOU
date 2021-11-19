function hand_split(sampleInput, delimiter) {
  let data = [];

  var matches = find_match(sampleInput);

  for (var index in matches) {
    if (data[0] !== null) data.push(matches[index]);
    else data.push(delimiter + matches[index]);
  }

  return data;
}

function find_match(s) {
  return s.match(/([^a]+)/g);
}

const text = "How are you doing today";

console.log(hand_split(text, "H"));
// const sep = " ";
// const mySliped = console.log(split(text, sep));
