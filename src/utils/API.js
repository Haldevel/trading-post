import axios from "axios";

export default {
    //get most recently added items on the landing page
    getRecentItems: function () {
        return axios.get("https://trading-post-server.herokuapp.com/api/items/dateDown")
    },
    // Gets items based on a search term/category - neds more work
    searchItem: function (search) {
        return axios.get("https://www.googleapis.com/books/v1/volumes?q=" + search); //change the url based on our api
    },
    //post request for the create a new item
    createNewItem: function () {
        return axios.post("https://trading-post-server.herokuapp.com/api/items/:userid")
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
    //get request to receive a user's ifo with his/her items and the wishlist
    getUserInfo: function (userid) {
        return axios.get("https://trading-post-server.herokuapp.com/api/users/" + userid)
    },
    //get request to receive items based on the category and the search term
    getSearchedItems: function (category, searchTerm) {
        /*  category = "Electronics";
         searchTerm = "Apple"; */
        console.log("category: " + category);
        console.log("searchTerm: " + searchTerm);
        return axios.get("https://trading-post-server.herokuapp.com/api/categories/" + category + "/" + searchTerm)
    },
    /* createNewItem: function() {
        return axios.post("Localhost:3000/api/items/:userid")
    },
    updateItem: function() {
        return axios.put("Localhost:3000/api/items/:itemId")
    },
    deleteItem: function() {
        return axios.delete("Localhost:3000/api/items/:itemId")
    } */

}