import React from 'react';
import ProductsInDb from './ProductsInDb';

function ProductList(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the products in the Database</h1>
					
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