import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import data from '../data/productos.json';

const ItemDetailContainer = () => {
  let { itemId } = useParams();
  let [producto, setProducto] = useState(undefined);

  useEffect(() => {
    const selectedProduct = data.find(prod => prod.id === itemId);
    setProducto(selectedProduct);
  }, [itemId]);

  console.log(producto);

  return (
    <div className='div-product'>
      {producto ? (
        <div>
          <h2>{producto.nombre}</h2>
          <p>Categoría: {producto.categoria}</p>
          <p>Precio: {producto.precio}</p>
          <p>Descripción: {producto.descripcion}</p>
          <p>Detalles:</p>
          <ul>
            <li>Talla: {producto.detalles.talla.join(', ')}</li>
            <li>Color: {producto.detalles.color.join(', ')}</li>
            <li>Material: {producto.detalles.material}</li>
          </ul>
        </div>
      ) : (
        'Cargando...'
      )}
    </div>
  );
};

export default ItemDetailContainer;
