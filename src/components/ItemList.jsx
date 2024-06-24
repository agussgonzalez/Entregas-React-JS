import React from 'react'
import { Item } from './Item'

export const ItemList = ( {productos} ) => {

  return (
    <div className='div-container'>
        {
            productos.length > 0 ?
            productos.map(producto => {
                return <Item key={producto.id} producto={producto} id={producto.id}/>
            })
            :<p>Cargando productos...</p>
        }
    </div>
  )
}
