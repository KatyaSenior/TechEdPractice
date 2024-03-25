const foods = ["pizza", "chocolate", "ice cream", "cheese"];
foods.forEach(function (food, index) {
  console.log(index, food);
});

const favouriteNumbers = [4, 8, 15, 16, 23, 42, Infinity];
for (let number of favouriteNumbers) {
  console.log(number);
}
