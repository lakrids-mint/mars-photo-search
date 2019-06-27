/* Vuex store that handles all communication with backend and store data */
import Vue from "vue";
import Vuex from "vuex";
import axios from "axios";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    photos: [],
    error: ""
  },
  getters: {
    getError: state => {
      return state.error;
    },
    getPhotos: state => {
      return state.photos;
    }
  },
  mutations: {
    getError(state, errormessage) {
      state.error = errormessage;
    },
    getPhotos(state, data) {
      state.photos = data.photos;
    }
  },
  actions: {
    //errorhandling
    error(context, errormessage) {
      context.commit("getError", errormessage);
    },
    //API call
    getPhotos(context, query) {
      const request = axios.post("/api/photos", {
        sol: query.sol,
        camera: query.camera
      });
      return request
        .then(response => {
          context.commit("getPhotos", {
            photos: response.data.photos
          });
          //tell user total number of photos
          context.commit(
            "getError",
            `${response.data.photos.length} photos matched your search criteria`
          );
          return response.data.photos;
        })
        .catch(error => {
          context.commit("getError", error.message);
        });
    }
  }
});
