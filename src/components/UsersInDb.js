import React, { Component } from 'react';
import Users from './Users';


class UsersInDb extends Component {

    constructor(){
        super()
        this.state = {
            userList: [],
        }
    }

    componentDidMount() {
        console.log("Users montados")
        fetch('http://localhost:3001/api/users')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(users => {
            this.setState({userList: users.users})
            
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                {   
                    this.state.userList.map((usuario,index)=>{
                        return  <Users  {...usuario}  key={index} />
                    })
                }

            </React.Fragment>
        )
    }

}

export default UsersInDb;