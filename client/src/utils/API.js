import axios from "axios";

export const API = {
  
  // Deletes the dream with the given id
  deleteDream: function(dreamID) {
    return axios.delete(`/deleteDream/${dreamID}`);
  },
  // Saves a dream to the database
  saveDream: function(dreamData) {
    return axios.post("/saveDream", dreamData);
  },
  //Update dream
  editDream: function (dreamData) {
    return axios.put("/editDream", dreamData);
  },

  // grabs dreams from the database
  getDreamList: function(searchParameter){
    return axios.get(`/dreamList/${searchParameter}`);
  }
  
};
