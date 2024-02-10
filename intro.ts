// Benefits of TS
// 1 - better error feedback
function reverse(str: string) {
  return str.split("").reverse().join("");
}

const result = reverse("Hello");

// 2 - better autocompletion & code hints

const reversed = reverse("ninja");

// 3 - custom types

interface MenuItem {
  title: string;
  cost: number;
}

function printMenuItem(item: MenuItem) {
  console.log(item.title, ":", item.cost);
}

// error eg 1
// printMenuItem()

// error eg 2
// printMenuItem({ title: "veggie carbonara", cost: "15" });

// error eg 3
// printMenuItem({ name: "avocado on toast", cost: 8 });

// correct example
printMenuItem({ title: "cheese pizza", cost: 10 });

// 4 - self documenting

// printMenuItem()
