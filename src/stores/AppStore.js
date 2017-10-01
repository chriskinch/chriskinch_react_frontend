import { EventEmitter } from "events";

import dispatcher from "../dispatcher";
import axios from "axios";

class AppStore extends EventEmitter {
  constructor() {
    super()
    this.articles = [];
    console.log(axios('http://chriskinch.com.drupal-8.x.dev/jsonapi/node/article?_format=api_json&fields[node--article]=field_category,field_image,field_primary_image,field_tags,field_teaser_image&include=field_category,field_image,field_primary_image,field_tags,field_teaser_image'));
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
    }
  }
}

const appStore = new AppStore;
dispatcher.register(appStore.handleActions.bind(appStore));

export default AppStore;