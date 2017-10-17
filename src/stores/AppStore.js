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

  processRelationships(obj, type) {
    const { relationships } = obj.data;
    if(relationships) {
      for (var key in relationships) {
        let { data } = relationships[key];
        let location;
        let include;
        if(!data.length){
          location = obj.data.relationships[key].data;
          include = this.getInclude({'id': data.id}, type);
          Object.assign(location, include);
        }else{
          for(let i=0; i<data.length; i++){
            location = obj.data.relationships[key].data[i];
            include = this.getInclude({'id': data[i].id}, type);
            Object.assign(location, include);
          }
        }
      }
    }
  }

  getInclude(ref, type) {
    const included = this.store[type].included;
    let lookup = _.find(included, ref);
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
        this.processRelationships(this.store.node, 'node');
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