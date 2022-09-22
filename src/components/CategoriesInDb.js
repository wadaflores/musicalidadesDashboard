import React, { Component } from 'react';
import CatCount from './CatCount';


class CategoriesInDb extends Component {

    constructor(){
        super()
        this.state = {
            categoriesList: [],
            countCategories: "",
            countProductsByCategorie: []
        }
    }

    componentDidMount() {
        console.log("Categories montadas")
        fetch('http://localhost:3001/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(categories => {
            this.setState({categoriesList: categories.data.categorias, countCategories: categories.data.countCategorias, countProductsByCategorie: categories.data.countProductosPorCategoria})
            
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Categories in DB -->*/}
                <div className="col-lg-6 mb-4">						
                    <div className="card shadow mb-4">
                        <div className="card-header py-3">
                            <h6 className="m-0 font-weight-bold text-gray-800">Categories in Database: <span> </span>
                                {   
                                    this.state.countCategories
                                }
                            </h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {/* {   
                                    this.state.categoriesList.map((category,index)=>{
                                        return  <Category  {...category}  key={index} />
                                    })
                                } */}
                                {   
                                    this.state.countProductsByCategorie.map((countCategory,index)=>{
                                        return  <CatCount  {...countCategory}  key={index} />
                                    })
                                }
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }

}

export default CategoriesInDb;