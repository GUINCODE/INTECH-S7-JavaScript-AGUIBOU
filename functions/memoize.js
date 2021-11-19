function memoize(fun) {
  // Votre implémentation
  const cache = new Map();
  return (n) => {
    const key = n;
    if (cache.get(key) == undefined) {
      cache.set(key, fun(n));
    }
    return cache.get(key);
  };
}

// Définition classique pas memoize-able (car elle se rappelle elle-même sans
//                                        possibilité de regarder dans le cache).
function fibonacci(n) {
  if (n === 0 || n === 1) return n;
  else return fibonacci(n - 1) + fibonacci(n - 2);
}

// Définition memoize-ée (car elle appelle fibonacci_m qui aura l'occasion
//                        de regarder dans le cache avant de rappeller la fonction.)
const fibonacci_m = memoize(function (n) {
  if (n === 0 || n === 1) return n;
  else return fibonacci_m(n - 1) + fibonacci_m(n - 2);
});

//test
console.time("first call sans cache");
fibonacci(35);
console.timeEnd("first call sans cache");

console.time("Puise dans le cache");
fibonacci_m(35);
console.timeEnd("Puise dans le cache");

