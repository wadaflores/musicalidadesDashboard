import React, { Component } from 'react';

class TotalUsers extends Component {

    constructor(){
        super()
        this.state = {
            totalUsers: [],
        }
    }

    componentDidMount() {
        console.log("Users montados")
        fetch('http://localhost:3001/api/users')
        .then(respuesta => {
            return respuesta.json()
        })
        .then(users => {
            this.setState({totalUsers: users.count})
            
        })
        .catch(error => console.log(error))
    }

    render() {
        return (
            <React.Fragment>
                {/*<!-- Users Total in DB -->*/}
                {   
                    this.state.totalUsers
                }
            </React.Fragment>
        )
    }

}

export default TotalUsers;