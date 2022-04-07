// Aquí comienza un código que encontré en internet para el menú acordeón en el curso de DW.

const toggleButton = document.getElementsByClassName('acordeon')[0]
const navbarLinks = document.getElementsByClassName('navbar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
}
)

//Fin del código menú acordeón.


class Producto { 
    constructor(id,nombre,precio){ //creo el objeto producto
        this.id = id;
        this.nombre = nombre.toUpperCase();
        this.precio = Number(precio);
    }
}

const productos = [];

productos.push(new Producto("1","taza",600));
productos.push(new Producto("2","apoya cuchara",200));
productos.push(new Producto("3","bowl",400));
productos.push(new Producto("4","bandeja",800));

    function buscarId(busc, producto){
        return busc.find(obj => obj.id === producto.toUpperCase())
    }
//div vacio y llamo todo esto en el innerhtml(?)

    // for (i=0; i<2;i++){
    //     let busqueda = buscarId(productos, prompt("Ingresa el id del producto que desea observar \n 1- Taza \n 2- Apoya Cuchara \n 3- Bowl \n 4- Bandeja"));
    //     if(busqueda!= undefined){
    //         alert("El producto es: " + busqueda.nombre + "\nSu número de id es: " + busqueda.id + "\nY su precio es de: " + busqueda.precio)
    //     }else{
    //         alert("No existe ese producto")
    //     }
    // }


    let boton = document.getElementById("btn"); //traigo el boton por el id

    boton.addEventListener("click",cuotas); //Al boton le agrego el evento, le digo 
    //que será llamado con un click y accionará la función catalogo
    
    function cuotas(){
    
        for (i=0; i<2;i++){
            let busqueda = buscarId(productos, prompt("Ingresa el id del producto que desea observar \n 1- Taza \n 2- Apoya Cuchara \n 3- Bowl \n 4- Bandeja"));
            if(busqueda!= undefined){
                alert("El producto es: " + busqueda.nombre + "\nSu número de id es: " + busqueda.id + "\nY su precio es de: " + busqueda.precio)
            }else{
                alert("No existe ese producto")
            }
        }
    
    }

