import React, { Component } from "react";
import { SearchBtn } from "../components/SearchBtn";
import Postform from '../components/Postform'
import PostFormBtn from '../components/PostFormBtn';
//import { Container} from "../Grid";

import { Container, Row } from '../components/Grid';
import API from "../utils/API";
import { Redirect } from 'react-router-dom';



class UpdateItem extends Component {

    state = {
        _id: "",
        title: "",
        picture: "",
        description: "",
        selectedCategory: "General",
        condition: "",
        //redirect: false,
        categories: ['General', 'Books', 'Electronics', 'Jewelry', 'Tools', 'Clothing', 'Furniture', 'Games', 'Sports Equipment', 'Appliances']
    };

    componentDidMount() {
        const { id } = this.props.match.params
        console.log("id " + id);
        this.setState({ _id: id });
        this.loadItemInfo(id);
    }

    loadItemInfo = (id) => {
        API.updateItem(id)
            .then(
                res => {
                    console.log(res.data)
                    this.setState({
                        //_id was set in the State already
                        title: res.data.title,
                        picture: res.data.picture,
                        description: res.data.description,
                        condition: res.data.condition,
                        category: res.data.category,
                        _owner: res.data._owner,
                        isLoaded: true
                    })
                },
                error => {
                    this.setState({ isLoaded: true, error });
                }
            )
        //.catch(err => console.log(err));
    };

    /*  fileChangedHandler = event => {
         this.setState({ picture: event.target.files[0] })
     } */

    handleInputChange = event => {

        const { name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //form submit event handler
    handleFormSubmit = (event) => {
        event.preventDefault();
        /* const fileUpload = new FormData();
        fileUpload.append("image", this.state.picture); */
        console.log(this.state.selectedCategory);

        API.createNewItem({
            _owner: "5cca717879f2d60017aed66e",
            title: this.state.title,
            picture: this.state.picture.length == 0 ? "https://www.pluggedin.com/images/content-image/placeholder_book.jpg" : this.state.picture,
            description: this.state.description,
            category: this.state.selectedCategory,
            condition: this.state.condition
        }).then(res => {
            console.log("The item was posted " + res.data);
            //this.renderRedirect(); 
            //add later redirect to the profile page if the item was added sucessfully
            //this.setState({ returnedItems: res.data, searchTerm: "" });     
        })
    }


    render() {
        return (
            <Container>
                <form>
                    <div className="formCont">
                        <h3>Update your Item</h3>
                        <div className="row">
                            <div className="input-field col s2">
                                <label for="title">Title:</label>
                            </div>
                            <div className="input-field col s10">
                                <input id="title" type="text"
                                    value={this.state.title}
                                    onChange={this.handleInputChange}
                                    name="title" required />
                            </div>

                            {/*    <div className="input-field col s6">
                                <div>
                                    <select className="select-dropdown" value={this.state.selectedCategory} id="dropdown"
                                        onChange={(e) => this.setState({ selectedCategory: e.target.value })}>
                                        {this.state.categories.map((category) => <option key={category} value={category}>{category}</option>)}
                                    </select>
                                </div>
                            </div> */}
                        </div>
                        <div className="row">
                            <div className="input-field col s2">
                                <label for="Description">Description:</label>
                            </div>
                            <div className="input-field col s10">
                                <input id="Description" type="text" name="description" value={this.state.description} onChange={this.handleInputChange} required />
                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s2">
                                <label for="Condition">Condition:</label>
                            </div>
                            <div className="input-field col s10">
                                <input id="Condition" type="text" name="condition" value={this.state.condition} onChange={this.handleInputChange} required />

                            </div>
                        </div>
                        <div className="row">
                            <div className="input-field col s2">
                                <label for="picture">Picture:</label>
                            </div>
                            <div className="input-field col s10">
                                <input id="picture" type="text" name="picture" onChange={this.handleInputChange} value={this.state.picture} required />
                            </div>
                        </div>
                        <button className="btn" onClick={this.handleFormSubmit}>Add Item</button>
                    </div>

                </form>
            </Container >



        )
    }
}

export default UpdateItem;    