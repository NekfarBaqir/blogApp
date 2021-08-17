import gql from "graphql-tag";

export const GET_ALL_POSTS = gql`
  query {
    articles {
      id
      title
      content
      description
      created_at
      updated_at
      published_at
      image {
        url
      }
      slug
      category {
        name
      }
      author {
        name
      }
    }
  }
`;
