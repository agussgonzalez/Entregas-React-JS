import React, { useEffect, useState } from 'react';
import data from "../data/productos.json";
import categories from "../data/categorias.json";
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';

export const ItemListContainer = () => {

  let { categoryId } = useParams();

  let [productos, setProductos] = useState([]);
  let [titulo, setTitulo] = useState("Productos");

  const pedirProductos = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(data);
      }, 1000);
    })
  }

  useEffect(() => {
    pedirProductos()
      .then((res) => {
        if (!categoryId) {
          setTitulo("Productos");
          setProductos(res);
        } else {
          const categoriaSeleccionada = categories.find((cat) => cat.id === categoryId);
          if (categoriaSeleccionada) {
            setTitulo(categoriaSeleccionada.nombre);
            setProductos(res.filter((prod) => prod.categoria === categoriaSeleccionada.nombre));
          } else {
            setTitulo("Productos");
            setProductos([]);
          }
        }
      })
  }, [categoryId]);

  return (
    <div className="item-list-container">
      <h1 className='text'>{titulo}</h1>
      <ItemList productos={productos} />
    </div>
  )
}
