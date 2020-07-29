import React from 'react'
import NavBar from './NavBar'
import fetchRepos from '../util/api'

function Result(users) {
    return users === "" ? <div className="display-flex flex-center" >Enter username</div> :
        <ul className= "display-flex flex-center">
            {users.map((users,index) =>(
                <li>
                    <h1>{users.name}</h1>
                    <a href="#">{user.email}</a>
                </li>
            ) )}
        </ul>


}

export default class Home extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            name: '',
            users: null,
            email: null,
        };
        this.onChangeInput = this.onChangeInput.bind(this);
        this.onButtonClick = this.onButtonClick.bind(this);
    }
    onChangeInput(e){
        this.setState(
            {
                name: e.target.value,
            })
    }
    onButtonClick(){
        this.setState(
            {
                users: fetchRepos(this.state.name),
           })
    }
    render() {
        let name = this.state.name
        let users = this.state.users
        return(
            <React.Fragment>
                <div className="nav-fragment display-flex flex-center">
                    <h1>Search Bar </h1>
                    <NavBar value={name} onChangeInput = {this.onChangeInput} onButtonClick = {this.onButtonClick}/>
                </div>
                <Result users={users}/>
            </React.Fragment>
        )
    }
}