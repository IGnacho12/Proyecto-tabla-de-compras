const $ = selector => document.querySelector(selector)
const PRODUCTOS = $('.productos')
const CANTIDAD = $('.td-input-cantidad')
const TOTAL = $('.total')

let precioPorUnidad = 0
let valorDelSelector = 'manzana'

PRODUCTOS.addEventListener('change', () => {
  TODO()
})

CANTIDAD.addEventListener('change', () => {
  TODO()
})

function conseguirPrecioPorUnidad () {
  switch (valorDelSelector) {
    case 'manzana':
      precioPorUnidad = 100
      break
    case 'banana':
      precioPorUnidad = 40
      break
    case 'yogur':
      precioPorUnidad = 200
      break
    case 'pan':
      precioPorUnidad = 350
      break
    default:
      precioPorUnidad = 100
      break
  }
}

function TODO () {
  // --- --- Acceder al producto seleccionado --- ---
  valorDelSelector = PRODUCTOS.value
  // --- --- Acceder al precio del producto --- ---
  conseguirPrecioPorUnidad()
  // --- --- Accerder a la cantidad --- ---
  const cantidad = $('.td-input-cantidad').value

  const total = cantidad * precioPorUnidad
  // Cambiar el precio por unidad HTMl
  const PRECIO_POR_UNIDAD = $('.td-precio-por-unidad')
  PRECIO_POR_UNIDAD.innerHTML = '$' + precioPorUnidad
  TOTAL.innerHTML = '$' + total
}
