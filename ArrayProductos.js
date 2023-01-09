// Dado un array de objetos producto (con nombre y precio) imprime un array de los objetos que sean más caros de 10.

const products = [
    { name: "Producto 1", price: 5 },
    { name: "Producto 2", price: 10 },
    { name: "Producto 3", price: 15 },
    { name: "Producto 4", price: 20 },
  ];
  
  const expensiveProducts = products.filter(product => product.price > 10);
  
  
  console.log(expensiveProducts);
  
  