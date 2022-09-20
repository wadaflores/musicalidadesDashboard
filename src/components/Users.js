import React from 'react';

function Users(props){
    
    return(
        <React.Fragment>
            <tr>
                <td>{props.id}</td>
                <td>{props.name}</td>
                <td>{props.email}</td>
            </tr>
        </React.Fragment>
    )
}
export default Users;

