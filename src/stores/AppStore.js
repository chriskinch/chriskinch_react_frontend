import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import axios from "axios";

class AppStore extends EventEmitter {
  constructor() {
    super()
    this.articles = [];
  }

  loadArticles() {
    const api_url = 'http://chriskinch.com.drupal-8.x.dev/jsonapi/node/article?_format=api_json&fields[node--article]=field_category,field_image,field_primary_image,field_tags,field_teaser_image&include=field_category,field_image,field_primary_image,field_tags,field_teaser_image';
    axios(api_url).then((response) => {
      console.log(response.data);
      return response.data;
    }).catch((error) => {
      console.log("Somethings wrong:", error);
    })
  }

  getAll() {
    return this.articles;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_TODOS": {
        this.todos = action.todos;
        this.emit("change");
        break;
      }
      default:
        console.log("This does not match an action type!");
    }
  }
}

const appStore = new AppStore();
dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;