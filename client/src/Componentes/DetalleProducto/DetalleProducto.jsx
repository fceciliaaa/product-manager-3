import { useNavigate, useParams, Link } from 'react-router-dom'
import axios from 'axios';

const DetalleProducto = ({ listaProducto, eliminarDeLista }) => {
  const { _id } = useParams();
  const navegacion = useNavigate();

  const productoSeleccionado = listaProducto.find((producto) => producto._id == _id);

  const eliminarProducto = async () => {
    const url = `http://localhost:8080/api/delete/${productoSeleccionado._id}`;
    await axios.delete(url);

    eliminarDeLista(productoSeleccionado._id);
    navegacion("/");
  }


  return (
    <>
      <h2>Detalle del producto </h2>
      <p>Titulo: {productoSeleccionado.title}</p>
      <p>Precio: $ {productoSeleccionado.price}</p>
      <p>Descripcion: {productoSeleccionado.description}</p>
      <button onClick={eliminarProducto}> Eliminar </button>
      <button onClick={() => navegacion(`/edit/${productoSeleccionado._id}`)}> Editar </button><br />
      <Link to={`/`}> Volver a la pagina principal </Link>
    </>
  )
}


export default DetalleProducto;