const SELECTOR = document.getElementById("selectProducts");
const PRECIO_POR_UNIDAD = document.getElementById("precioPorUnidad");
const CANTIDAD = document.getElementById("cantidad");
const TOTAL = document.getElementById("total");

let cantidad = 0;
let VALOR_DEL_SELECTOR = "manzana"; // Se pone este valor para usarlo por defecto

// Cuando cambie el input de la cantidad de productos
CANTIDAD.addEventListener("input", () => {
  cantidad = parseInt(CANTIDAD.value);
  console.log(cantidad);
  console.log(VALOR_DEL_SELECTOR);
  sacarTotal();
});

// Cuando cambie el producto
SELECTOR.addEventListener("change", () => {
  sacarTotal();
});

function sacarTotal() {
  let VALOR_DEL_SELECTOR = document.getElementById("selectProducts").value;

  console.log(VALOR_DEL_SELECTOR);

  let precioPorUnidad = 0;

  switch (VALOR_DEL_SELECTOR) {
    case "manzana":
      precioPorUnidad = 100;
      break;
    case "banana":
      precioPorUnidad = 40;
      break;
    case "yogur":
      precioPorUnidad = 200;
      break;
    case "pan":
      precioPorUnidad = 350;
      break;
    default:
      precioPorUnidad = 100;
      break
  }

  

  PRECIO_POR_UNIDAD.innerHTML = "$" + precioPorUnidad.toString();
  const precioTotal = precioPorUnidad * cantidad;
  TOTAL.innerHTML = "$" + precioTotal.toString();
}
