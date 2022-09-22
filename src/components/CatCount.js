import React from 'react';

function CatCount(props){
    return(
        <React.Fragment>
            <div className="col-lg-6 mb-4">
                <div className="card text-white bg-dark  shadow">
                    <div className="card-body">
                        <u>{props.tipo}</u><span>: </span>
                        {props.cantidad}<span> Productos</span>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default CatCount;