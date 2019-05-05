import React, { Component } from "react";
import API from "../utils/API";
import {withRouter} from 'react-router-dom';

class signin extends Component {

  state = {
    userName: "",
   password: "" 
  }
  
  handleInputChange = event => {
     const { name, value } = event.target;
     this.setState({
        [name]: value
     });
  };

  handleFormSubmit = async (event) => {
     event.preventDefault();
     if (this.state.userName && this.state.password ) {
            const signinData={
               userName : this.state.userName,
               password: this.state.password,
            }    

            await API.signin(signinData).then(res => {
               console.log({res}, 'login res');
               if (res.data.userName){
                  const value = res.data.userName;
                  localStorage.setItem("username",value);

                  console.log(localStorage.getItem("username"));
               
                  this.setState({
                     userName: "",
                     password: ""  
                  });
                  this.props.history.push("/");
                 
               }
               
               
            });
        
     } 
  };

  render() {

     return (
        <div>
           <form>
              <input
                 value={this.state.userName}
                 onChange={this.handleInputChange}
                 name="userName"
                 placeholder="Username"
                 type="text"
              />             
              
              <input
                 value={this.state.password}
                 onChange={this.handleInputChange}
                 name="password"
                 placeholder="Password"
                 type="password"
              />                          
              
              <button onClick={this.handleFormSubmit}>
                 Sign In
              </button>
           </form>
        </div>
     );
  }
}

export default withRouter(signin);

