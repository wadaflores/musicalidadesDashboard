import React from 'react';
import ProductsInDb from './ProductsInDb';

function ProductList(){
    return(
        <React.Fragment>
			{/*<!-- PRODUCTS LIST -->*/}
			
			<div className="container-fluid">
				<h1 id="listadoProductos" className="h3 mb-2 text-gray-800">Todos los Productos en la Base de Datos</h1>
			</div>
			{/*<!-- DataTales Example -->*/}
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
							<thead>
								<tr className="grey">
									<th>Id</th>
									<th>Producto</th>
									<th>Precio</th>
									<th>Descuento</th>
									<th>Precio Final</th>
									<th>Stock</th>
									<th>Link</th>
								</tr>
							</thead>
							<tfoot>
								<tr className="grey">
									<th>Id</th>
									<th>Producto</th>
									<th>Precio</th>
									<th>Descuento</th>
									<th>Precio Final</th>
									<th>Stock</th>
									<th>Link</th>
								</tr>
							</tfoot>
							<tbody>
								<ProductsInDb />
							</tbody>
						</table>
					</div>
				</div>
			</div>            
        </React.Fragment>
    )
}
export default ProductList;