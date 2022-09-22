import React from 'react';
import CategoriesInDb from './CategoriesInDb';
import ContentRowProducts from './ContentRowProducts';
import LastProductInDb from './LastProductInDb';
function ContentRowTop(){
    return(
        <React.Fragment>
				{/*<!-- Content Row Top -->*/}
				<div className="container-fluid">
					<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">Musicalidades Dashboard</h1>
					</div>
				
					{/*<!-- Content Row Movies-->*/}
					<ContentRowProducts />
					{/*<!-- End movies in Data Base -->*/}
					
	
					{/*<!-- Content Row Last Movie in Data Base -->*/}
					<div className="row">
						{/*<!-- Last Movie in DB -->*/}
						<LastProductInDb />
						{/*<!-- End content row last movie in Data Base -->*/}

						{/*<!-- CategoriesInDb -->*/}
						<CategoriesInDb />
						{/*<!--End CategoriesInDb-->*/}		
					</div>
				</div>
				{/*<!--End Content Row Top-->*/}

        </React.Fragment>
    )

}
export default ContentRowTop;