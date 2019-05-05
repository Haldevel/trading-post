import axios from "axios";

export default {
    signup: function(signupData) {
        return axios.post("https://fierce-reaches-70530.herokuapp.com/api/auth/signup",signupData)
    },

    signin: function(signinData) {
        return axios.post("https://fierce-reaches-70530.herokuapp.com/api/auth/login",signinData)
    },   

    //get most recently added items on the landing page

    // http://fathomless-sands-76947.herokuapp.com/
    getRecentItems: function () {
        return axios.get("https://trading-post-server.herokuapp.com/api/items/dateDown")
    },       
    //post request for the create a new item
    createNewItem: function (postData) {
        //return axios.post("https://trading-post-server.herokuapp.com/api/items/:userid", postData)
        console.log(postData);
        return axios.post("https://trading-post-server.herokuapp.com/api/items/5cca717879f2d60017aed66e", postData)
        /* example
        {	
        "_owner": "5cc8da15ce98f8f39fccd613",
	    "title": "Book",
	    "picture": "test",
	    "description": "C++ textbook",
	    "condition": "so-so",
	    "category": "Books"
        }
        */
    },
    //getUserInfo: function (userid) {
    //get request to receive a user's ifo with his/her items and the wishlist
    users: function() {
        return axios.get("https://trading-post-server.herokuapp.com/api/auth/users")
    },    

    getUserInfo: function (userid) {
        //return axios.get("https://trading-post-server.herokuapp.com/api/users/" + userid)
        return axios.get("https://trading-post-server.herokuapp.com/api/users/cca717879f2d60017aed66e");
    },
    //get request to receive items based on the category and the search term
    getSearchedItems: function (category, searchTerm) {
        /*  category = "Electronics";
         searchTerm = "Apple"; */
        console.log("category: " + category);
        console.log("searchTerm: " + searchTerm);
        return axios.get("https://trading-post-server.herokuapp.com/api/categories/" + category + "/" + searchTerm)
    },

    //get request for update an item form
    updateItem: function () {
        //return axios.post("https://trading-post-server.herokuapp.com/api/items/single/:itemid")
        //console.log(postData);
        return axios.get("https://trading-post-server.herokuapp.com/api/items/single/5cca086a4c0a7d0017d2382e")
        /* example
        {	
        "_owner": "5cc8da15ce98f8f39fccd613",
	    "title": "Book",
	    "picture": "test",
	    "description": "C++ textbook",
	    "condition": "so-so",
	    "category": "Books"
        }
        */
    },
      //put request for updating an existing item
      updateExistingItem: function (postData) {
        //return axios.put("https://trading-post-server.herokuapp.com/api/items/single/:itemId", postData)
        console.log(postData);
        return axios.put("https://trading-post-server.herokuapp.com/api/items/single/5cca086a4c0a7d0017d2382e", postData)
        /* example
        {	
        "_owner": "5cc8da15ce98f8f39fccd613",
	    "title": "Book",
	    "picture": "test",
	    "description": "C++ textbook",
	    "condition": "so-so",
	    "category": "Books"
        }
        */
    },

    /*
    updateItem: function() {
        return axios.put("Localhost:3000/api/items/:itemId")
    },
    deleteItem: function() {
        return axios.delete("Localhost:3000/api/items/:itemId")
    } */

}