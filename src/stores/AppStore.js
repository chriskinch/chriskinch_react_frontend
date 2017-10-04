import { EventEmitter } from 'events';
import _ from 'lodash';
import dispatcher from '../dispatcher';

class AppStore extends EventEmitter {
  constructor() {
    super()
    this.articles = [];
    this.blocks = [];
  }

  getAll(type) {
    return this[type];
  }

  processImages() {
    const data = this.articles.data;
    for(let i=0; i<data.length; i++){
      let { field_primary_image, field_teaser_image } = data[i].relationships;
      if(!field_teaser_image.data) {
        this.articles.data[i].relationships.field_teaser_image = field_primary_image;
      }
    }
  }

  getInclude(ref) {
    const included = this.articles.included;
    let lookup = _.find(included, ref);

    // console.log(included);
    // console.log(ref);
    // console.log(lookup);

    return lookup;
  }

  handleActions(action) {
    switch(action.type) {
      case "RECEIVE_ARTICLES": {
        this.articles = action.data;
        this.processImages();
        this.emit("change");
        break;
      }
      case "RECEIVE_BLOCKS": {
        this.blocks = action.data;
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