var ownedCatAndDog = function(cat, dog) {
    return [cat < 15 ? 0 : cat < 24 ? 1 : (cat - 16) / 4 | 0,
            dog < 15 ? 0 : dog < 24 ? 1 : (dog - 14) / 5 | 0]
  }