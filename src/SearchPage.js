import React, {useState} from "react";
import {Link} from "react-router-dom";
import {Card} from "react-bootstrap";
import CardGroup from 'react-bootstrap/CardGroup';

export default function SearchPage(props) {
    const [palabras, setPalabras] = useState(props.theproducts);
    const categorias = props.theproducts.map((item) => (item.category))
    const categoriasUnicas = categorias.filter((valor, index) => {
    return categorias.indexOf(valor) === index;})
function filtrador(texto){
    setPalabras(props.theproducts.filter((item) => {
        if (item.title.toLowerCase().includes(texto)) {
            return item;
        }}))}
function filtrarCategorias() {
    setPalabras(props.theproducts.filter((item) => {
        if (item.category === document.getElementById("selector").value || document.getElementById("selector").value === "All") {
            return item;
        }}))
}
return(
    <div id="productosresultados"> 
           <p><div>
                    <p id="catálogo"><h2>Catalogo</h2></p>
                    <input id="filtro"></input><br></br>
                    <button id="buscador" onClick={() => filtrador(document.getElementById("filtro").value.toLowerCase())}>Buscar</button>
                    <label><h2>Filtro</h2></label>
                    <br></br>
                    <select id="selector" onChange={() => filtrarCategorias()}>
                    <option value="All">All</option>
                    {categoriasUnicas.map((item) => (
                    <option value={item}>{item}</option>
                    ))}
                    </select>

            </div></p>
    
            <div id="productosresultados" className="todas" >
            {palabras.map((item, index) => (
                <Card className="unproducto"  >
                <CardGroup variant="top" className="cartas">
                <Card.Body>
                <Card.Img className="imagen" src={item.images[0]} />
                <Card.Title><b>{item.title}</b></Card.Title>
                <div>
                <Link to={"/products/" + index}><button>Ver</button></Link>
                </div>
                </Card.Body>
                </CardGroup>
                </Card>
                ))}
            </div>
</div>)}  