import axios from "axios";

export const API = {
  
  // Deletes the book with the given id
  deleteDream: function(dreamID) {
    return axios.delete(`/deleteDream/${dreamID}`);
  },
  // Saves a book to the database
  saveDream: function(dreamData) {
    return axios.post("/saveDream", dreamData);
  },

  // grabs books from the database
  getDreamList: function(){
    return axios.get("/dreamList");
  }
  
};
