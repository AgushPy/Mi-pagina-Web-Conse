let productos = document.querySelector(".productos");
let enviocon = document.querySelector('#con')
let enviosin = document.querySelector('#sin')

enviocon.addEventListener('click', () => {
    productos.innerHTML = 'Monto del Envio 500'
})
enviosin.addEventListener('click', () => {
    productos.innerHTML = 'Monto sin envio el mismo valor'
})