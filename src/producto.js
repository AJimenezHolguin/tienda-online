const producto = document.getElementById('producto');
const productoImagen = producto.querySelector('.producto__imagen');
const thumbs = producto.querySelector('.producto__thumbs');
// Color
const propiedadColor = producto.querySelector('#propiedad-color');
// Cantidad
const btnDisminuirCantidad = producto.querySelector('#disminuir-cantidad');
const btnIncrementarCantidad = producto.querySelector('#incrementar-cantidad');
const inputCantidad = producto.querySelector('#cantidad')

//Funcionalidad de las thumbnails
thumbs.addEventListener('click',(e)=>{
    if ( e.target.tagName === 'IMG'){
        const imagenSrc = e.target.src;

        //Obtenemos la posicion del ultimo / (barra inclinada)
        const lastIndex = imagenSrc.lastIndexOf('/');

        // Cortamos la cadena de texto para obtener solamente una parte.
       const nombreImagen = imagenSrc.substring(lastIndex + 1);

       // Cambiamos la ruta de la imagen del producto.
       productoImagen.src = `/img/tennis/${nombreImagen}`

    }
})

propiedadColor.addEventListener('click',(e) =>{
    if(e.target.tagName === "INPUT"){
        productoImagen.src = `./img/tennis/${e.target.value}.jpg`
        
    }
})

    
btnIncrementarCantidad.addEventListener('click',(e)=>{
    inputCantidad.value = parseInt(inputCantidad.value) + 1;
})

btnDisminuirCantidad.addEventListener('click',(e)=>{
    if(inputCantidad.value > 1 ){
        inputCantidad.value = parseInt(inputCantidad.value) - 1;
    }
})