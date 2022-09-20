import React, { Component } from 'react';
import Category from './Category';


class CategoriesInDb extends Component {

    constructor(){
        super()
        this.state = {
            categoriesList: [],
        }
    }

    componentDidMount() {
        console.log("Categories montadas")
        fetch('http://localhost:3001/api/products')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(categories => {
            this.setState({categoriesList: categories.categorias})
            
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
                            <h6 className="m-0 font-weight-bold text-gray-800">Categories in Database</h6>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                {   
                                    this.state.categoriesList.map((category,index)=>{
                                        return  <Category  {...category}  key={index} />
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