import React, { Component } from 'react';
import Product from './Product';


class ProductsInDb extends Component {

    constructor(){
        super()
        this.state = {
            totalProductos: [],
            precioFinal: {}
        }
    }

    componentDidMount() {
        console.log("Products montados")
        fetch('http://localhost:3001/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(total => {
            this.setState({totalProductos: total.data.productos})
        })
        .catch(error => console.log(error))
    }

    render() {
        console.log(this.state.totalProductos)
        return (
            <React.Fragment>
                {/*<!-- Products in DB -->*/}

                {   
                    this.state.totalProductos.map((product,index)=>{
                        return  <Product  {...product}  key={index} />
                    })
                }  
            </React.Fragment>
        )
    }

}

export default ProductsInDb;