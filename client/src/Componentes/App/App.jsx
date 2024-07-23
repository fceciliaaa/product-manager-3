import { useEffect, useState } from 'react'
import './App.css'
import Form from '../Form/Form'
import AllProducts from '../AllProducts/AllProducts'
import DetalleProducto from '../DetalleProducto/DetalleProducto'
import axios from 'axios'
import { Routes, Route } from 'react-router-dom'
import EditarProducto from '../ActualizarLista/EditarProducto'

const App = () => {

  const [listaProducto, setListaProducto] = useState([]);


  useEffect(() => {
    const verLista = async () => {
      const url = 'http://localhost:8080/api/list'
      const respuesta = await axios.get(url);
      setListaProducto(respuesta.data)
    }
    verLista();
  }, []);


  const actualizarLista = (nuevaLista) => {
    setListaProducto([...listaProducto, nuevaLista]);
  }

  const editarDetalleProducto = (producto) => {

    const listaTemporal = [...listaProducto];
    for (let i = 0; i < listaTemporal.length; i++) {
      if (listaTemporal[i]._id == producto._id) {
        listaTemporal[i] = producto;
      }
    }
    setListaProducto(listaTemporal);
  }

  const eliminarDeLista = (_id) => {
    const listaTemporal = [...listaProducto];
    for (let i = 0; i < listaTemporal.length; i++) {
      if (listaTemporal[i]._id == _id) {
        listaTemporal.splice(i, 1);
      }
    }
    setListaProducto(listaTemporal);
  }

  return (
    <>
      <Routes>
        <Route path="/" element={
          <>
            <Form actualizarLista={actualizarLista} />
            <AllProducts listaProducto={listaProducto} eliminarDeLista={eliminarDeLista} />
          </>
        } />
        <Route path='/detalle/producto/:_id' element={< DetalleProducto listaProducto={listaProducto} eliminarDeLista={eliminarDeLista} />} />
        <Route path='/edit/:_id' element={< EditarProducto editarDetalleProducto={editarDetalleProducto} listaProducto={listaProducto} />} />

      </Routes>
    </>
  )
}

export default App;
