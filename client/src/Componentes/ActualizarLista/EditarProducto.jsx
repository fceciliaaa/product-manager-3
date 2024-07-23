import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditarProducto = ({ editarDetalleProducto, listaProducto }) => {
  const { _id } = useParams();
  const navegacion = useNavigate();

  const [title, setTitle] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    const productoSeleccionado = listaProducto.find((producto) => producto._id == _id);
    if (productoSeleccionado) {
      setTitle(productoSeleccionado.title);
      setPrice(productoSeleccionado.price);
      setDescription(productoSeleccionado.description);
    }
  }, [_id, listaProducto]);

  const agregarProducto = async (e) => {
    e.preventDefault();
    try {
      const nuevoProducto = { title, price, description };

      const url = `http://localhost:8080/api/edit/${_id}`
      const respuesta = await axios.put(url, nuevoProducto);

      editarDetalleProducto(respuesta.data);
      navegacion(`/detalle/producto/${_id}`)

    } catch {
      console.log("Algo salio mal")
    }
  }


  return (
    <>
      <h3>Actualizar Producto</h3>
      <form onSubmit={agregarProducto}>

        <div>
          <label > Title </label>
          <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
        </div><br />

        <div>
          <label> Price </label>
          <input type="text" value={price} onChange={e => setPrice(e.target.value)} />
        </div><br />

        <div>
          <label> Description </label>
          <input type="text" value={description} onChange={e => setDescription(e.target.value)} />
        </div><br />

        <button type='submit'> Actualizar </button>
      </form>
    </>
  )
}

export default EditarProducto;