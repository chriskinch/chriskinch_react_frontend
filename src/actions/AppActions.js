import dispatcher from "dispatcher";
import axios from "axios";

const base_url = process.env.REACT_APP_API_BASE_URL;

export function loadCollection(api_url) {
  dispatcher.dispatch({type: "LOADING_COLLECTION"});
  loadAPI(base_url + api_url, "RECEIVE_COLLECTION");
}

export function loadNode(api_url) {
  dispatcher.dispatch({type: "LOADING_NODE"});
  loadAPI(base_url + api_url, "RECEIVE_NODE");
}

export function loadAny(api_url) {
  loadAPI(api_url, "HELLO");
}

export function loadAPI(url, action) {
  console.log(url);
  axios(url).then((response) => {
    if(action === "HELLO"){
      console.log(response);
    }
    dispatcher.dispatch({type: action, data: response.data});
  }).catch((error) => {
    console.log("Somethings wrong:", error);
  });
}