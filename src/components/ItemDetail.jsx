import React, { useContext } from 'react'
import { CartContext } from '../context/CartContext';

export const ItemDetail = ( { producto } ) => {

    const { agregarAlCarrito } = useContext(CartContext);

  return (
    <div className='div-product'>
        <img className='img-cards' src={producto.imagen} />
        <h1>{producto.nombre}</h1>
        <p>{producto.descripcion}</p>
        <p>${producto.precio}</p>
        <p>{producto.detalles.color}</p>
        <p>{producto.detalles.material}</p>
        <p>{producto.detalles.talla}</p>
        <button onClick={() => agregarAlCarrito(producto)}>Agregar al carrito</button>
    </div>
  )
}