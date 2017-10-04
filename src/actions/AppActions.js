import dispatcher from "../dispatcher";
import axios from "axios";

export function loadTodos() {
  dispatcher.dispatch({type: "LOADING_ARTICLES"});
  const base_url = process.env.REACT_APP_API_BASE_URL;
  const api_url = '/jsonapi/node/article?_format=api_json&fields[node--article]=uuid,nid,title,body,field_link,field_category,field_image,field_primary_image,field_tags,field_teaser_image&include=field_category,field_image,field_primary_image,field_tags,field_teaser_image';
  axios(base_url + api_url).then((response) => {
    //console.log(response);
    dispatcher.dispatch({type: "RECEIVE_ARTICLES", articles: response.data});
  }).catch((error) => {
    console.log("Somethings wrong:", error);
  });
}