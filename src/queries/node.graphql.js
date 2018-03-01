import gql from 'graphql-tag';

export const RoutePath = gql`query routePath($path: String!) {
  route(path: $path){
    __typename
    nodeContext {
      ... on Node {
        title
        uuid
        published:entityPublished
        body {
          full:processed
        }
        links:fieldLink {
          url:uri
          name:title
        }
        tags:fieldTags {
          entity {
            uuid
            url:entityUrl {
              alias
            }
            name
          }
        }
        categories:fieldCategory {
          entity {
            uuid
            url:entityUrl {
              alias
            }
            name
          }
        }
        primaryImage:fieldPrimaryImage {
          alt
          height
          title
          width
          url
          defaultCrop:derivative(style: max_325x325) {
            height
            width
            url
          }
          narrowCrop:derivative(style: max_650x650) {
            height
            width
            url
          }
          wideCrop:derivative(style: max_1300x1300) {
            height
            width
            url
          }
          superCrop:derivative(style: max_2600x2600) {
            height
            width
            url
          }
        }
        images:fieldImage {
          alt
          height
          title
          width
          url
          defaultCrop:derivative(style: max_325x325) {
            height
            width
            url
          }
          narrowCrop:derivative(style: max_650x650) {
            height
            width
            url
          }
          wideCrop:derivative(style: max_1300x1300) {
            height
            width
            url
          }
          superCrop:derivative(style: max_2600x2600) {
            height
            width
            url
          }
        }
      }
    }
  }
  menuByName(name: "main") {
    links {
      label
      url {
        path
      }
    }
  }
}`