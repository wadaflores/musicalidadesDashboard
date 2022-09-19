import React, { Component } from 'react';


class TotalCategories extends Component {

    constructor(){
        super()
        this.state = {
            totalCategorias: [],
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(total => {
            this.setState({totalCategorias: total.categorias.length})
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Products Total in DB -->*/}
                {   
                    this.state.totalCategorias
                }
            </React.Fragment>
        )
    }

}

export default TotalCategories;