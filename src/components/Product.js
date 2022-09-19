import React from 'react';

function Product(props){
    
    return(
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.nombre}</td>
                <td>${props.precio}</td>
                <td>{props.descuento}%</td>
                <td>{`(${props.precio} * (100-${props.descuento}))/100`}</td> {/**************** REARMAR ESTO*****************/}
                <td>{props.stock}</td>
            </tr>
        </React.Fragment>
    )
}
export default Product;

