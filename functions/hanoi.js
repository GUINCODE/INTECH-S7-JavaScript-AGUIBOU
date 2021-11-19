function hanoi(N, Tour1, Tour2, Tour3) {
  if (N == 1)
    console.log(Tour1 + "=>" + Tour2);
  else {
    // appels récurssif
    hanoi(N - 1, Tour1, Tour3, Tour2);

    hanoi(1, Tour1, Tour2, Tour3);

    hanoi(N - 1, Tour3, Tour2, Tour1);
  }
}

// Appel de la fonction

deplacer(5, "A", "B", "C");
