import React, { Component } from 'react';


class TotalProducts extends Component {

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
            this.setState({totalProductos: total.data.countProductos})
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Products Total in DB -->*/}
                {   
                    this.state.totalProductos
                }
            </React.Fragment>
        )
    }

}

export default TotalProducts;