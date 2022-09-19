import React, { Component } from 'react';
import Product from './Product';


class ProductsInDb extends Component {

    constructor(){
        super()
        this.state = {
            totalProductos: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(total => {
            this.setState({totalProductos: total.productos})
        })
        .catch(error => console.log(error))
    }

    render() {
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