//Saludo de Bienvenida
let saludoNombre = prompt("¡Bienvenid@ a la Tienda Virtual de Casa Barceló Arte y Fe! \nMe indica su nombre por favor?");

//ASINCRONÍAS
function handlebtnclick() {}

let ecommerce = document.getElementById('ecommerce')

ecommerce.addEventListener('click', handlebtnclick)

let counter = 0;

const interval = setInterval(() => {
    counter++
    ecommerce.innerText = `SALE!!!`


    if (counter >= 3) {
        clearInterval(interval)
        console.log("¡¡¡ Estamos de Oferta !!!")
        ecommerce.innerText = `¡¡¡ Estamos de Oferta !!!`
    }
}, 1500);

// Llamar al contenedor con id="saludo"
let box = document.getElementById("saludo");
box.append(`Gusto en saludarle Sr@ ${saludoNombre}`);

// Crear nodo de tipo elemento, etiqueta p
let slogan = document.createElement("p")
// Le seteo el html al elemento p
slogan.innerHTML = `<h2>Para Nosotros es un Placer Atenderle...</h2>`;
//Añadir el nodo element parrafo al div contenedor
box.append(slogan);

Swal.fire({
    position: 'center',    
    title: 'Gana un cupón de descuento en los productos seleccionados !!!',
    showConfirmButton: false,
    timer: 5000,
});


// Primera Sección: Carrito de Compras

// Variables
const contenedorProductos = document.getElementById('contenedor-productos');

const contenedorCarrito = document.getElementById('carrito-contenedor');

const botonVaciar = document.getElementById('vaciar-carrito');

const contadorCarrito = document.getElementById('contadorCarrito');

const cantidad = document.getElementById('cantidad');
const precioTotal = document.getElementById('precioTotal');
const cantidadTotal = document.getElementById('cantidadTotal');

let carrito = [];

document.addEventListener('DOMContentLoaded', () => {
    if (localStorage.getItem('carrito')) {
        carrito = JSON.parse(localStorage.getItem('carrito'))
        actualizarCarrito()
    }
})

botonVaciar.addEventListener('click', () => {
    carrito.length = 0;
    actualizarCarrito();
})

//Primer paso, crear el contenedor de los productos, inyectarle el HTML y agregarlos al contenedor-productos  
// luego insertamos el HTML en el DOM con appendChild()
stockProductos.forEach((producto) => {
    const div = document.createElement('div')
    div.classList.add('producto')
    div.innerHTML = `
    <img src=${producto.img} alt= "imagen producto">
    <h3>${producto.nombre}</h3>
    <p>${producto.desc}</p>    
    <p class="precioProducto">Precio: $${producto.precio}</p>
    <button id="agregar${producto.id}" class="boton-agregar">Agregar <i class="fas fa-shopping-cart"></i></button>
    `
    contenedorProductos.appendChild(div)

    const boton = document.getElementById(`agregar${producto.id}`)
    //Por cada tarjeta de producto, creo un button, dicho elemento le agregamos el addEventListener

    boton.addEventListener('click', () => {
    agregarAlCarrito(producto.id)
    })
})

//Segundo Paso
const agregarAlCarrito = (prodId) => {    
    const existe = carrito.some(prod => prod.id === prodId) 

    if (existe) { 
        const prod = carrito.map (prod => { 
            if (prod.id === prodId) {
                prod.cantidad++
            }
        })
    } else {const item = stockProductos.find((prod) => prod.id === prodId) 
        carrito.push(item);        
    }    
    actualizarCarrito();    
}

const eliminarDelCarrito = (prodId) => {
    const item = carrito.find((prod) => prod.id === prodId);
    const indice = carrito.indexOf(item);
    carrito.splice(indice, 1); 
    actualizarCarrito();
    console.log(carrito);     
}

//Tercer paso
const actualizarCarrito = () => {
    contenedorCarrito.innerHTML = "" 
    //Por cada producto creamos un div con esta estructura y le hacemos un append al contenedorCarrito
    carrito.forEach((prod) => {
        const div = document.createElement('div');
        div.className = ('productoEnCarrito');
        div.innerHTML = `
        <p>${prod.nombre}</p>
        <p>Precio: $${prod.precio}</p>
        <p>Cantidad: <span id="cantidad">${prod.cantidad}</span></p>
        <button onclick='eliminarDelCarrito(${prod.id})' class="boton-eliminar"><i class="fas fa-trash-alt"></i></button>
        `
        contenedorCarrito.appendChild(div);

        localStorage.setItem('carrito', JSON.stringify(carrito))
    })    
    
    contadorCarrito.innerText = carrito.length // actualizamos con la longitud del carrito.
    
    console.log(carrito);
    precioTotal.innerText = carrito.reduce((acc, prod) => acc + prod.cantidad * prod.precio, 0);    
}



//Segunda Sección, Acordion Descripción de Productos 
const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion) => {
    accordion.onclick = function () {
        this.classList.toggle("is-open");

        let content = this.nextElementSibling;
        console.log(content);
        // UTILIZANDO EL OPERADOR TERNARIO
        content.style.maxHeight ? content.style.maxHeight = null : content.style.maxHeight = content.scrollHeight + "px"
    };
});

const alertaBtn1 = document.querySelector('#acordion1')

alertaBtn1.addEventListener('click', () => {
    Swal.fire({
        title: 'Oferta!',
        text: 'Descuento del 10% llevando un Souvenir',
        imageUrl: './img/rosario11.jpeg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        timer: 2000,
    })
})

const alertaBtn2 = document.querySelector('#acordion2')

alertaBtn2.addEventListener('click', () => {
    Swal.fire({
        title: 'Oferta!',
        text: 'Descuento del 15% llevando en Productos Seleccionados',
        imageUrl: './img/rosario33.png',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        timer: 2000,
    })
})

const alertaBtn3 = document.querySelector('#acordion3')

alertaBtn3.addEventListener('click', () => {
    Swal.fire({
        title: 'Oferta!',
        text: 'Descuento del 20% llevando un Rosario de Cruz',
        imageUrl: './img/rosario44.png',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        timer: 2000,
    })
})

const alertaBtn4 = document.querySelector('#acordion4')

alertaBtn4.addEventListener('click', () => {
    Swal.fire({
        title: 'Oferta!',
        text: 'Descuento del 10% llevando un Souvenir de Cruz',
        imageUrl: './img/rosario55.jpeg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        timer: 2000,
    })
})

const alertaBtn5 = document.querySelector('#acordion5')

alertaBtn5.addEventListener('click', () => {
    Swal.fire({
        title: 'Oferta!',
        text: 'Descuento del 10% llevando un Souvenir de Corazón',
        imageUrl: './img/rosario66.jpeg',
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: 'Custom image',
        showConfirmButton: false,
        timer: 2000,
    })
})

// Ofertas: Proceso Asincrónico:

const ofertas = [];

const lista = document.querySelector('#listado')

fetch('javascript/ofertas.json')
    .then((response) => response.json())
    .then((data) => {

        data.forEach((ofertas) => {
            const li = document.createElement('li')
            li.innerHTML = `
            <div class="card" id="tarjetaOferta" style="width: 18rem;">
            <img src="${ofertas.img}" alt="rosarios en oferta">
            <h4>${ofertas.nombre}</h4>
            <p>${ofertas.desc}</p><p>${ofertas.precio}</p>
            </div>
            `
            lista.append(li)
        })
    })


fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'Tienda Online Casa Barceló Arte y Fe',
            body: 'Post de Prueba',
            userId: 1,
        }),
        headers: {
            'content-type': 'application/json; charset=UTF-8',
        },
    })

    .then((response) => response.json())
    .then((data) => {
        console.log(data)
    })

// Tercera Sección, Comunidad de Usuarios
// tenemos que agrupar la información: nombre, edad, descripción, imagen
class Usuario {
    constructor(nombre, edad, descripcion, imagen) {
        this.nombre = nombre,
            this.edad = edad,
            this.descripcion = descripcion,
            this.imagen = imagen
    }
}

//declaramos un array donde guardamos los objetos usuario
let arrayUsuarios = [];
let bandera = false;

//generar los eventos para capturar la información del html
window.addEventListener("load", () => {
    if (localStorage.getItem("arraydeUsuarios")) {
        arrayUsuarios = JSON.parse(localStorage.getItem("arraydeUsuarios"));
        generarInterfaz(arrayUsuarios)
    }
})

let formulario = document.getElementById("form");

formulario.addEventListener("submit", (event) => {
    event.preventDefault();
    let nodo = event.target.children;
    if (bandera) {
        console.log("actualizando");
        editarCampos()
        bandera = false;
    } else {
        const usuario = new Usuario(nodo[0].value, nodo[1].value, nodo[2].value, nodo[3].value);
        arrayUsuarios.push(usuario);
        console.log(arrayUsuarios);
        generarInterfaz(arrayUsuarios);
    }
    localStorage.setItem("arraydeUsuarios", JSON.stringify(arrayUsuarios))
    //capturar el valor de los input
    formulario.reset()
})

//funcion que genera el html de las tarjetas de los usuarios
const generarInterfaz = (array) => {
    let tarjeta = document.getElementById("tarjeta-usuario")
    tarjeta.innerHTML = "";
    array.map(el => tarjeta.innerHTML += `
    <div class="card" id="${el.nombre}" style="width: 18rem;">
                            <img src="${el.imagen}" class="card-img-top" alt="usuario">
                            <div class="card-body">
                              <h5 class="card-title">${el.nombre}</h5>
                              <p class="card-text">${el.edad}</p>
                              <p class="card-text">${el.descripcion}</p>
                              <button type="button" class="btn btn-danger btn_eliminar">Borrar</button>
                              <button type="button" class="btn btn-dark btn_actualizar">Actualizar</button>
                              </div>
                          </div>    
    `)
    eliminar()
    actualizar()
}

//funcion para eliminat tarjeta
const eliminar = () => {
    let btnEliminar = document.querySelectorAll(".btn_eliminar");

    for (const btn of btnEliminar) {
        btn.addEventListener("click", (event) => {
            let nodo = event.path[2];
            // console.dir(event);            
            let buscar = arrayUsuarios.findIndex(el => el.nombre == nodo.id);
            arrayUsuarios.splice(buscar, 1);
            nodo.remove();
            localStorage.setItem("arraydeUsuarios", JSON.stringify(arrayUsuarios))
        })
    }
};

//función actualizar
const actualizar = () => {
    let btnActualizar = document.getElementsByClassName("btn_actualizar");
    for (const btn of btnActualizar) {
        btn.addEventListener("click", (event) => {
            bandera = true;
            let nodo = event.path[2];
            let buscar = arrayUsuarios.find(el => el.nombre == nodo.id)
            document.getElementById("nombre").value = buscar.nombre;
            document.getElementById("edad").value = buscar.edad;
            document.getElementById("descripcion").value = buscar.descripcion;
            document.getElementById("imagen").value = buscar.imagen;
        })
    }
}

const editarCampos = () => {
    let id = document.getElementById("nombre").value
    console.log(id);
    let buscar = arrayUsuarios.findIndex(el => el.nombre == id)
    arrayUsuarios[buscar].edad = document.getElementById("edad").value
    arrayUsuarios[buscar].descripcion = document.getElementById("descripcion").value
    arrayUsuarios[buscar].imagen = document.getElementById("imagen").value
    generarInterfaz(arrayUsuarios)
}