const numbers = [12, 7, 23, 4, 11, 18, 5, 29, 10, 3, 16];

const students = [
  { id: 1, name: "Ali", score: 75 },
  { id: 2, name: "Vali", score: 45 },
  { id: 3, name: "Sardor", score: 92 },
  { id: 4, name: "Madina", score: 60 },
  { id: 5, name: "Malika", score: 88 },
  { id: 6, name: "Aziz", score: 52 },
  { id: 7, name: "Zarina", score: 97 },
  { id: 8, name: "Jasur", score: 34 }
];

const products = [
  { id: 1, name: "Laptop", price: 8500000, stock: 12 },
  { id: 2, name: "Mouse", price: 150000, stock: 5 },
  { id: 3, name: "Keyboard", price: 350000, stock: 8 },
  { id: 4, name: "Monitor", price: 2200000, stock: 15 },
  { id: 5, name: "Headphones", price: 450000, stock: 3 }
];

function getPrimeNumbers(arr) {
  function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  }
  return arr.filter(isPrime);
}

function getPassedStudents(arr) {
  return arr.filter(student => student.score >= 60);
}

function multiplyNumbers(arr) {
  return arr.reduce((acc, curr) => acc * curr, 1);
}

function getLowStockProducts(arr) {
  return arr.filter(product => product.stock < 10);
}

function getProductById(arr, id) {
  return arr.find(product => product.id === id);
}

function getTopStudent(arr) {
  return arr.reduce((max, student) => student.score > max.score ? student : max, arr[0]);
}

function addStudent(arr, newStudent) {
  return [...arr, newStudent];
}

function getExpensiveProducts(arr) {
  return arr.filter(product => product.price > 500000);
}

function increaseScores(arr) {
  return arr.map(student => ({
    ...student,
    score: student.score + 10
  }));
}

function getTotalProductsValue(arr) {
  return arr.reduce((total, product) => total + (product.price * product.stock), 0);
}

console.log(getPrimeNumbers(numbers));
console.log(getPassedStudents(students));
console.log(multiplyNumbers(numbers));
console.log(getLowStockProducts(products));
console.log(getProductById(products, 3));
console.log(getTopStudent(students));
console.log(addStudent(students, { id: 9, name: "Kamola", score: 81 }));
console.log(getExpensiveProducts(products));
console.log(increaseScores(students));
console.log(getTotalProductsValue(products));