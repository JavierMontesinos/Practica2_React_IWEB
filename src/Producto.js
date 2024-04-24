import {useNavigate, useParams} from "react-router-dom";
import Location from './Location.js';

export default function Producto (props) {
    const navigate = useNavigate();
    let { productId } = useParams();

    return(<div>
        <Location/>
        <div id="container">
            <img id="imgproducto" src={props.product[productId].images[0]} alt="Imagen del Prducto[0]" />
            <ul>
                <li id="cardproducto">
                    <h3 id="titulo">{props.product[productId].title}</h3>
                    <p>Descripcion: <b>{props.product[productId].description}</b></p>
                    <p>Precio: {props.product[productId].price}</p>
                </li>
            </ul>
        </div>
        <button id="volver" onClick={() => navigate('/')}>Volver</button>
    </div>
    )

}