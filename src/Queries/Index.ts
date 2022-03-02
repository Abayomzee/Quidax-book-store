import { gql } from "@apollo/client";

const defaultQuery = `
      id
      title
      release_date
      authors {
        id
        name
      }
      rating
      price
      currency
      likes
      genres {
        id
        name
      }
      tags {
        id
        name
      }
      published_at
      image_url
      available_copies,
      publisher,
     full_description
`;

export const GET_FEATURED_BOOKS = gql`
  query GetAllFeaturedBooks {
    books(where: { featured: true }) {
        ${defaultQuery}
    }
  }
`;

export const GET_BOOKS = gql`
  query GetAllBooks {
    books(limit: 27) {
        ${defaultQuery}
    }
  }
`;

export const GET_BOOK_BY_ID = gql`
  query GetAllFeaturedBooks($id: ID!) {
    book(id: $id) {
      ${defaultQuery}
    }
  }
`;

export const SEARCH_BOOKS_BY_FILTER = gql`
  query SearchBooks($filter: String) {
    book1: books(where: { title_contains: $filter }) {
        ${defaultQuery}
    },
    book2: books(where: {genres: {name_contains: $filter},}) {
        ${defaultQuery}
    },
    book3: books(where: {authors: {name_contains: $filter},}) {
        ${defaultQuery}
    }
    book4: books(where: {tags: {name_contains: $filter},}) {
        ${defaultQuery}
    }
  }
`;

export const UPDATE_BOOK_AVAILABLE_COPY = gql`
  mutation GetAllFeaturedBooks($id: ID!, $available_copies: Int) {
    editBookInput(id: $id, available_copies:$available_copies) {
      ${defaultQuery}
    }
  }
`;
