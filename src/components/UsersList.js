import React from 'react';
import UsersInDb from './UsersInDb';

function UsersList(){
    return(
        <React.Fragment>
				    {/*<!-- PRODUCTS LIST -->*/}
					<h1 className="h3 mb-2 text-gray-800">All the users in the Database</h1>
					
					{/*<!-- DataTales Example -->*/}
					<div className="card shadow mb-4">
						<div className="card-body">
							<div className="table-responsive">
								<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
									<thead>
										<tr className="colorcito">
                                            <th>Id</th>
                                            <th>Nombre</th>
                                            <th>Email</th>
										</tr>
									</thead>
									<tfoot>
										<tr className="colorcito">
											<th>Id</th>
                                            <th>Nombre</th>
                                            <th>Email</th>
										</tr>
									</tfoot>
									<tbody>
										<UsersInDb />
									</tbody>
								</table>
							</div>
						</div>
					</div>            
        </React.Fragment>
    )
}
export default UsersList;