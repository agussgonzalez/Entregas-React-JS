import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { CartContext } from '../context/CartContext'

export const Item = ({producto}) => {
  
const {agregarAlCarrito} = useContext(CartContext);

  return (
    <div className='div-product'>
        <img className='img-cards' src={producto.imagen} />
        <h2>{producto.nombre}</h2>
        <p>${producto.precio}</p>
        <p>{producto.descripcion}</p>
        <Link to={`/item/${producto.id}`}><p className='detalles'>Detalles</p></Link>
        <button onClick={() => agregarAlCarrito(producto)}>agregar al carrito</button>
    </div>
  )
}
