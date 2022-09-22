import React, { Component } from 'react';
import LastProduct from './LastProduct';


class LastProductInDb extends Component {

    constructor(props){
        super(props)
        this.state = {
            lastProduct: [],
            lastProductName: ""

        }
    }

    componentDidMount() {
        console.log("UltimoProducto montado")
        fetch('http://localhost:3001/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(product => {
            this.setState({lastProduct: product.data.ultimoProducto, lastProductName: product.data.ultimoProducto.nombre })
        })
        .catch(error => console.log(error))
    }

    render() {
        
        console.log("LastProduct montado")
        return (
            <React.Fragment>
                {   
                    this.state.lastProduct.map((lastProd,index)=>{
                        return  <LastProduct  {...lastProd}  key={index} />
                    })
                } 
        </React.Fragment>
        )
    }

}

export default LastProductInDb;