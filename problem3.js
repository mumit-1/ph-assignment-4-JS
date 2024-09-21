function checkDigitsInName(name) {
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  if (typeof name !== "string") {
    const output = "Invalid Input";
    return output;
  } else {
    for (let i = 0; i < 10; i++) {
      if (name.includes(i)) {
        output = false;
        return output;
      }
    }
    array = name.split("");
    for (let a = 0; a < array.length; a++) {
      value = array[a];
      if (!letters.includes(value)) {
        output = false;
        return output;
      }
    }
    output2 = true;
    return output2;
  }
}
