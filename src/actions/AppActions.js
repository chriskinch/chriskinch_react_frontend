import dispatcher from "../dispatcher";
import axios from "axios";

export function loadTodos() {
  dispatcher.dispatch({type: "LOADING_ARTICLES"});
  const api_url = 'http://chriskinch.com.drupal-8.x.dev/jsonapi/node/article?_format=api_json&fields[node--article]=uuid,title,body,field_link,field_category,field_image,field_primary_image,field_tags,field_teaser_image&include=field_category,field_image,field_primary_image,field_tags,field_teaser_image';
  axios(api_url).then((response) => {
    console.log(response.data);
    dispatcher.dispatch({type: "RECEIVE_ARTICLES", articles: response.data});
  }).catch((error) => {
    console.log("Somethings wrong:", error);
  });
}