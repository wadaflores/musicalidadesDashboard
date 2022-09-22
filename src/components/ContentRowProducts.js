import React from 'react';
import SmallCard from './SmallCard';
import TotalProducts from './TotalProducts';
import TotalBrands from './TotalBrands';
import TotalUsers from './TotalUsers';

let productInDataBase = {
    color:   "primary",
    titulo: "Total Products",
    valor: <TotalProducts />,
    icono: "fas fa-guitar",
}

let amount ={
    color:   "success",
    titulo: "Total Brands",
    valor: <TotalBrands />,
    icono: "fas fa-tags",
}

let user = {
    color:   "warning",
    titulo: "Total Users",
    valor: <TotalUsers />,
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