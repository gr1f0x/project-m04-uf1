// Definición de la clase Producto
class Producto {
    constructor(public nombre: string, public precio: number) {}
}

// Definición de la clase CarritoDeCompras
class CarritoDeCompras {
    private items: Producto[] = [];

    // Agregar un producto al carrito
    agregarProducto(producto: Producto) {
        this.items.push(producto);
    }

    // Calcular el total de la compra
    calcularTotal(): number {
        return this.items.reduce((total, producto) => total + producto.precio, 0);
    }

    // Vaciar el carrito
    vaciarCarrito() {
        this.items = [];
    }

    // Imprimir los productos en el carrito
    imprimirCarrito() {
        console.log("Productos en el carrito:");
        this.items.forEach(producto => {
            console.log(`${producto.nombre} - $${producto.precio}`);
        });
        console.log(`Total: $${this.calcularTotal()}`);
    }
}

// Crear algunos productos
const producto1 = new Producto("Camisa", 20);
const producto2 = new Producto("Pantalón", 30);
const producto3 = new Producto("Zapatos", 50);

// Crear un carrito de compras
const carrito = new CarritoDeCompras();

// Agregar productos al carrito
carrito.agregarProducto(producto1);
carrito.agregarProducto(producto2);
carrito.agregarProducto(producto3);

// Imprimir el carrito
carrito.imprimirCarrito();

// Vaciar el carrito
carrito.vaciarCarrito();

// Imprimir el carrito después de vaciarlo
carrito.imprimirCarrito();
