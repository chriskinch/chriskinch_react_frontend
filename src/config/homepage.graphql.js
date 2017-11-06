import gql from 'graphql-tag';

export const HomePosts = gql`query homePosts {
  nodeQuery(filter:{status:true}) {
    entities {
      entityLabel
      entityUuid
      entityPublished
      entityUrl {
        alias
      }
      ... on NodeArticle {
        fieldLink {
          uri
          title
        }
        fieldTags {
          entity {
            entityUrl {
              alias
            }
            name
          }
        }
        fieldCategory {
          entity {
            name
          }
        }
        fieldTeaserImage {
          alt
          height
          title
          width
          url
          defaultCrop:derivative(style: scale_crop_500) {
            height
            width
            url
          }
        }
        fieldPrimaryImage {
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
        fieldImage {
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
}`