import React from 'react';

function Category(props){
    return(
        <React.Fragment>
<div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Último Producto en la Base de Datos</h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{height: 10 +'rem'}} src="http://localhost:3001/img/products/producto-1657641871006.jpg" alt=" Musicalidades - Último Producto"/>
                                </div>
                                <h3>{props.nombre}</h3>
                                <p>{props.descripcion}</p>
                                <div className="card-body">
                                        <b>Stock: {props.stock}</b> 
                                    </div>
                                <div className="card text-white bg-dark shadow">
                                    <div className="card-body">
                                        Precio: ${props.precio}
                                    </div>
                                    <div className="card-body">
                                        Descuento: {props.descuento}%
                                    </div>                                   
                                </div>
                                <div className="card-body red">
                                    <strong>Precio Final: ${props.precio * (100-props.descuento)/100}</strong>
                                </div>
                                <br></br>                                 
                                <a className="btn grey" target="_blank" rel="noreferrer" href={props.url}>Ver Detalles del Producto</a>
                            </div>
                        </div>
                    </div>
        </React.Fragment>
    )
}
export default Category;