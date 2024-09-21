function calculateTax(income, expenses) {
  if (income < 0 || expenses < 0 || expenses > income) {
    const output = "Invalid Input";
    return output;
  } else {
    profit = income - expenses;
    tax = profit * (20 / 100);
    return tax;
  }
}

