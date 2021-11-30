const contains = (haystack, needle, startIndex=0) => {
    for (let index = startIndex; index < haystack.length; index++) {
        if(haystack[index]==needle) {
          return index;
        }
    }
    return -1
};

//Test
const haystack="Bonjour le monde, je suis de retour"

const needle = 'z';
const startIndex=5
console.log(contains(haystack, needle, startIndex));