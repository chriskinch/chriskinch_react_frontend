import { EventEmitter } from 'events';
import _ from 'lodash';
import dispatcher from '../dispatcher';

class AppStore extends EventEmitter {
  constructor() {
    super()
    this.store = [];
  }

  getAll(type) {
    return this.store[type];
  }

  getTitle(){
    let title = null;
    if(this.store.node) {
      title = this.store.node.data.attributes.title;
    }
    return title;
  }

  processImages() {
    const data = this.store.articles.data;
    for(let i=0; i<data.length; i++){
      let { field_primary_image, field_teaser_image } = data[i].relationships;
      if(!field_teaser_image.data) {
        this.store.articles.data[i].relationships.field_teaser_image = field_primary_image;
      }
    }
  }

  getInclude(ref, type) {
    const included = this.store[type].included;
    let lookup = _.find(included, ref);

    // console.log(included);
    // console.log(ref);
    // console.log(lookup);

    return lookup;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_ARTICLES": {
        this.store.articles = action.data;
        this.processImages();
        this.emit("change");
        break;
      }
      case "RECEIVE_NODE": {
        this.store.node = action.data;
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