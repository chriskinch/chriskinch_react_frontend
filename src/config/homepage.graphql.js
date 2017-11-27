import gql from 'graphql-tag';

export const HomePosts = gql`query homePosts {
  __typename
  nodeQuery(filter:{status:true}) {
    entities {
      entityLabel
      entityUuid
      entityPublished
      entityUrl {
        alias
      }
      ... on NodeArticle {
        body {
          summary
          processed
        }
        fieldTags {
          entity {
            uuid
            entityUrl {
              alias
            }
            name
          }
        }
        fieldCategory {
          entity {
            uuid
            entityUrl {
              alias
            }
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
          defaultCrop:derivative(style: scale_crop_500) {
            height
            width
            url
          }
        }
      }
    }
  }
}`