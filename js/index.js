const d = document // Guardo el objeto document en una constante
const cuerpo = d.body // Guardo el objeto body en una constante
// cuerpo.style.backgroundColor = '#222' // Cambio el color de fondo del body
const cabeza = document.head
const titulo = document.createElement('title')
const cabecera = document.getElementById('header')
const banner = titulo.innerText = 'Comisión #55265'
cabeza.appendChild(titulo)
// Definir mi NavBar
const header = d.createElement('header')
const contenedorNav = d.createElement('div')
const navBar = d.createElement('nav')
const uls = d.createElement('ul')
const links = [
    {
        page: 'index',
        link: 'Inicio'
    },
    {
        page: 'products',
        link: 'Productos'
    },
    {
        page: 'contacts',
        link: 'Contacto'
    },
    {
        page: 'maps',
        link: 'Ubicación'
    },
    {
        page: 'about_us',
        link: 'Acerca de'
    }
]
const fotter = d.createElement('footer')

const main = d.createElement('main')
cuerpo.prepend(fotter)
cuerpo.prepend(main)
navBar.classList = 'navbar navbar-expand-lg navbar-light bg-light'
contenedorNav.classList = 'container-fluid'
uls.classList = 'navbar-nav'

cuerpo.prepend(header)
header.append(navBar)
navBar.appendChild(contenedorNav)
contenedorNav.appendChild(uls)

links.forEach((nombre) => {
    uls.innerHTML += `
                    <li class="nav-item">
                        <a class="nav-link" href="/${nombre.page}.html">${nombre.link}</a> 
                    </li>
    `
})

const sectionA = d.createElement('section')
sectionA.className = 'container-fluid'
sectionA.id = 'blablabla'
main.appendChild(sectionA)

const sectA = d.getElementById('blablabla')
const h1Text = d.createElement('h1')
h1Text.innerHTML = 'Hola Coders.!!'
h1Text.style.backgroundColor = 'blue'
h1Text.style.color = 'yellow'
sectA.appendChild(h1Text)

const sectionImg = d.createElement('section')
sectionImg.className = 'logo'
sectionImg.innerHTML = `<img src="/images/logo.png" alt="Logo de JS">`

sectA.appendChild(sectionImg)

const anio = new Date().getFullYear(); /// 2023
fotter.classList = 'coderhouse footer'
fotter.innerHTML = `<a href="https://www.coderhouse.com/" target="_blank">&copy; CoderHouse | JavaScript | ${banner} | ${anio}</a>`

const boton = d.createElement('button')
boton.classList = 'botones btn btn-success'
boton.innerText = 'Boton'
boton.id = 'botoncito'
const contenedorBoton = d.createElement('div')
contenedorBoton.classList = 'container coderhouse'
sectionA.appendChild(contenedorBoton)
contenedorBoton.appendChild(boton)
boton.type = 'submit';

// Carrito Impovisado

// Funcion que obtenga el carrito
function getCartFromLocalStorage() {
    const cartJson = localStorage.getItem('carrrito')
    return JSON.parse(cartJson) || []
}

// Funcion que guarde el Carrito el el Local Storage
function saveCartToLocalStorage(cart){
    const cartJson = JSON.stringify(cart)
    localStorage.setItem('carrrito', cartJson)
}

// Funcion que agregue productos al carrito
function addToCart(product) {
    const cart = getCartFromLocalStorage()
    cart.push(product)
    saveCartToLocalStorage(cart)
}

const producto1 = {
    nombre: "Azucar",
    precio: 800,
    stock: 10
}
const producto2 = {
    nombre: "Leche",
    precio: 500,
    stock: 100
}

addToCart(producto1)
addToCart(producto2)

const carrito = getCartFromLocalStorage()
console.log('Los productos del Carrito son: ', carrito)