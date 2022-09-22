import React from 'react';

function Product(props){
    
    return(
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre}</td>
                <td>${props.precio}</td>
                <td>{props.descuento}%</td>
                <td>${props.precio * (100-props.descuento)/100}</td>
                <td>{props.stock}</td>
                <td><a className="btn grey" target="_blank" rel="noreferrer" href={props.url}>Detalles Producto {props.id}</a></td>
            </tr>
        </React.Fragment>
    )
}
export default Product;

