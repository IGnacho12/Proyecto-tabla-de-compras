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

const BTN_MORE = $('.btn-more')
const TDBODY = $('.tdbody')
let i = 0
BTN_MORE.addEventListener('click', () => {
  // Utiliza la función insertAdjacentHTML correctamente
  i += 1
  console.log(i)
  TDBODY.insertAdjacentHTML('beforeend', `
    <tr>
      <td class="td-productos">
        <select name="productos" class="productos">
          <option value="manzana">Manzana</option>
          <option value="banana">Banana</option>
          <option value="yogur">Yogur</option>
          <option value="pan">Pan</option>
        </select>
      </td>

      <td class="td-precio-por-unidad">$100</td>

      <td class="td-input">
        <input type="number" class="td-input-cantidad" placeholder="Cantidad">
      </td>

      <td class="td-total">
        <p class="total">$0</p>
      </td>
    </tr>
  `)
})
