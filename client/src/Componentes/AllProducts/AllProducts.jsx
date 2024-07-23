import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const AllProducts = ({ listaProducto, eliminarDeLista }) => {
  const navegacion = useNavigate();

  const eliminarProducto = async (producto) => {
    const url = `http://localhost:8080/api/delete/${producto._id}`;
    await axios.delete(url);

    eliminarDeLista(producto._id);
    navegacion("/");
  }

  return (
    <>
      <h3>Lista de productos</h3>
      {listaProducto.map((producto, index) => {
        return (
          <p key={index}>
            <Link to={`/detalle/producto/${producto._id}`}> {producto.title} </Link>
            <button type='submit' onClick={() => eliminarProducto(producto)}> Eliminar </button>
          </p>

        )
      })}
    </>
  )
}

export default AllProducts;