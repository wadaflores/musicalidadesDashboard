import React, { Component } from 'react';

class TotalBrands extends Component {

    constructor(){
        super()
        this.state = {
            totalBrands: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(brands => {
            this.setState({totalBrands: brands.data.countMarcas})
            
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Brands Total in DB -->*/}
                {   
                    this.state.totalBrands
                }
            </React.Fragment>
        )
    }

}

export default TotalBrands;