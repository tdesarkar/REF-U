// Include the axios package for performing HTTP requests (promise based alternative to request)
var axios = require("axios");

// Helper functions for making API Calls
var helper = {
    share: function(shareOptions){
        return axios.post("/referenceletter/share/", shareOptions);
    },
    test: function(){
        return axios.get("/referenceletter/1");
    }
    getSharedLists: function(userId) {
        return axios.get("/user/sharedlists/"+userId);
    },
    createUser: function (user) {
        return axios.post("/user/", user)
    },

    postList: function (list) {
        return axios.post("/referenceletter/", list);
    },

    getSavedList: function (userId) {
        return axios.get("/referenceletter/user/" + userId);
    },

    getListItems: function (listId) {
        return axios.get("/referenceletter/" + listId);
    }

};

module.exports = helper;