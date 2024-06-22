import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase/config";

export const NavBar = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const categoriasRef = collection(db, "categorias");
      const snapshot = await getDocs(categoriasRef);
      const categoriesData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setCategories(categoriesData);
    };

    fetchCategories();
  }, []);

  return (
    <nav className="nav">
      <ul className="nav-menu">
        <li className="nav-item">
          <NavLink to="/" activeclassname="active" className="nav-link">Inicio</NavLink>
        </li>
        {categories.map(category => (
          <li className="nav-item" key={category.id}>
            <NavLink to={`/category/${category.id}`} activeclassname="active" className="nav-link">
              {category.nombre}
            </NavLink>
          </li>
        ))}
      </ul>
    </nav>
  )
}
