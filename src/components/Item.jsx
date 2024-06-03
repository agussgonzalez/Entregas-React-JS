import React from 'react'
import { Link } from 'react-router-dom'

export const Item = ({producto}) => {
  return (
    <div className='div-product'>
        <img className='img-cards' src={producto.imagen} />
        <h2>{producto.nombre}</h2>
        <p>${producto.precio}</p>
        <p>{producto.descripcion}</p>
        <Link to={`/item/${producto.id}`}><p className='detalles'>Detalles</p></Link>
    </div>
  )
}
