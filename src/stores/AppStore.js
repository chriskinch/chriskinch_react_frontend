import { EventEmitter } from "events";

import dispatcher from "../dispatcher";

class AppStore extends EventEmitter {
  constructor() {
    super()
    this.articles = [];
  }

  getAll() {
    return this.articles;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_ARTICLES": {
        this.articles = action.articles;
        this.emit("change");
        break;
      }
      default:
    }
  }
}

const appStore = new AppStore();
dispatcher.register(appStore.handleActions.bind(appStore));

export default appStore;