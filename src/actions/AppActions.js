import dispatcher from "../dispatcher";
import axios from "axios";

const base_url = process.env.REACT_APP_API_BASE_URL;

export function loadArticles(api_url) {
  dispatcher.dispatch({type: "LOADING_ARTICLES"});
  loadAPI(base_url + api_url, "RECEIVE_ARTICLES");
}

export function loadBlocks(api_url) {
  dispatcher.dispatch({type: "LOADING_BLOCKS"});
  loadAPI(base_url + api_url, "RECEIVE_BLOCKS");
}

export function loadAPI(url, action) {
  console.log(url);
  axios(url).then((response) => {
    //console.log(response);
    dispatcher.dispatch({type: action, data: response.data});
  }).catch((error) => {
    console.log("Somethings wrong:", error);
  });
}