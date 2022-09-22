import React from 'react';
import image from '../assets/images/logo-musicalidades-header.png';

function SideBar(){
    return(
        <React.Fragment>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <a className="sidebar-brand d-flex align-items-center justify-content-center"  target="_blank"  rel="noreferrer" href="http://localhost:3001">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Musicalidades"/>
                    </div>
                </a>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <a className="nav-link" target="_blank"  rel="noreferrer" href="http://localhost:3001">
                        <i className="fas fa-fw fa-store"></i>
                        <span>Tienda Musicalidades</span></a>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Listados</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <a className="nav-link collapsed" href="#listadoProductos">
                        <i className="fas fa-fw fa-guitar"></i>
                        <span>Productos</span>
                    </a>
                </li>

                {/*<!-- Nav Item - Users -->*/}
                <li className="nav-item">
                    <a className="nav-link" href="#listadoUsuarios">
                        <i className="fas fa-fw fa-user"></i>
                        <span>Usuarios</span></a>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                {/* <li className="nav-item">
                    <a className="nav-link" href="/">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Tables</span></a>
                </li> */}

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
        </React.Fragment>
    )
}
export default SideBar;