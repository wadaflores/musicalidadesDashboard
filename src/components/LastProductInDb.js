import React, { Component } from 'react';
import imagenFondo from '../assets/images/instruments.png';
/* import LastProduct from './LastProduct';
 */

class LastProductInDb extends Component {

    constructor(){
        super()
        this.state = {
            lastProdName: "",
            lastProdDesc: "",
            imgUltimoProducto:""

        }
    }

    componentDidMount() {
        console.log("UltimoProducto montado")
        fetch('http://localhost:3001/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(prod => {
            this.setState({lastProd: prod.data.ultimoProducto, lastProdName: prod.data.ultimoProducto.nombre, lastProdDesc: prod.data.ultimoProducto.descripcion, imgUltimoProducto: prod.data.imgUltimoProducto })
        })
        .catch(error => console.log(error))
    }

    render() {
        
        console.log(this.state.imgUltimoProducto)
        return (
            <React.Fragment>
            <div className="col-lg-6 mb-4">
                        <div className="card shadow mb-4">
                            <div className="card-header py-3">
                                <h5 className="m-0 font-weight-bold text-gray-800">Last product in Database</h5>
                            </div>
                            <div className="card-body">
                                <div className="text-center">
                                    <img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 40 +'rem'}} src="" alt=" Musicalidades - Instrumentos "/>
                                </div>
                                <h3>{this.state.lastProdName}</h3>
                                <p>{this.state.lastProdDesc}</p>
{/*                                 <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">View product detail</a>
 */}                            </div>
                                {/* {   
                                    this.state.countProductsByCategorie.map((lastProd,index)=>{
                                        return  <LastProduct  {...lastProd}  key={index} />
                                    })
                                } */}
                        </div>
                    </div>
        </React.Fragment>
        )
    }

}

export default LastProductInDb;