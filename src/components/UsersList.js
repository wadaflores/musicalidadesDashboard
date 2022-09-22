import React from 'react';
import UsersInDb from './UsersInDb';

function UsersList(){
    return(
        <React.Fragment>
			{/*<!-- PRODUCTS LIST -->*/}
			<div className="container-fluid">
				<h1 id="listadoUsuarios" className="h3 mb-2 text-gray-800">Todos los Usuarios en la Base de Datos</h1>
			</div>
			{/*<!-- DataTales Example -->*/}
			<div className="card shadow mb-4">
				<div className="card-body">
					<div className="table-responsive">
						<table className="table table-bordered" id="dataTable" width="100%" cellSpacing="0">
							<thead>
								<tr className="colorcito">
									<th>Id</th>
									<th>Nombre y Apellido</th>
									<th>Email</th>
								</tr>
							</thead>
							<tfoot>
								<tr className="colorcito">
									<th>Id</th>
									<th>Nombre y Apellido</th>
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