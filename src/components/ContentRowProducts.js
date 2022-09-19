import React from 'react';
import SmallCard from './SmallCard';
import TotalProducts from './TotalProducts';
import TotalCategories from './TotalCategories';

let productInDataBase = {
    color:   "primary",
    titulo: "Total Products",
    valor: <TotalProducts />,
    icono: "fas fa-guitar",
}

let amount ={
    color:   "success",
    titulo: "Total Categories",
    valor: <TotalCategories />,
    icono: "fas fa-folder",
}

let user = {
    color:   "warning",
    titulo: "Total Users",
    valor: "xxxxxxxxxxx",
    icono: "fas fa-user",
}

let cardProps = [productInDataBase,amount,user];


function ContentRowProducts(){
    return (
        <React.Fragment>
        {/*<!-- Content Row -->*/}
        <div className="row">
            {
                cardProps.map((producto,index)=>{
                    return <SmallCard  {...producto}  key= {index}/>
                })
            }      
        </div>
        </React.Fragment>
    )
}
export default ContentRowProducts;