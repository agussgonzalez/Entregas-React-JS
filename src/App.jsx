import { ItemListContainer } from "./components/ItemListContainer"
import ItemDetailContainer from "./components/ItemDetailContainer"
import "./css/main.css"
import Header from './components/header/Header'
import {useState} from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import NotFound from './components/NotFound'
import Footer from './components/Footer'

function App() {

  return (
    <BrowserRouter>
    <Header />
    <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/category:categoryId" element={<ItemListContainer/>} />
    <Route path="/item/:itemId" element={<ItemDetailContainer />} />
    <Route path="/*" element={<NotFound/>} />
    </Routes>
    <Footer />
    </BrowserRouter>
  )
}
export default App
