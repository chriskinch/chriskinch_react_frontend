import gql from 'graphql-tag';

export const HomeNodes = gql`query homeNodes {
  __typename
  nodeQuery(filter:{status:true}) {
    entities {
      title:entityLabel
      uuid:entityUuid
      published:entityPublished
      url:entityUrl {
        alias
      }
      ... on Node {
        body {
          summary
          full:processed
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
        teaserImage:fieldTeaserImage {
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
        primaryImage:fieldPrimaryImage {
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
  menuByName(name: "main") {
    links {
      label
      url {
        path
      }
    }
  }
}`