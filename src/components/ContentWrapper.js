import React from 'react';
import TopBar from './TopBar';
import ContentRowTop from './ContentRowTop';
import ProductList from './ProductList';
import UsersList from './UsersList';
import Footer from './Footer';
function ContentWrapper(){
    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <ContentRowTop />
                    <ProductList />
                    <UsersList />
                    <Footer />
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;