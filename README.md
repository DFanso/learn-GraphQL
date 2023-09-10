# learn-GraphQL
 trying to learn GraphQL apis with node



GraphQL Book API Documentation
==============================

Overview
--------

This API allows you to query a list of books and filter them by author. The technology stack includes Node.js, Express.js, and Apollo Server for GraphQL.

Requirements
------------

*   Node.js installed
*   npm installed

Dependencies
------------

*   `express` for the web server
*   `graphql` for GraphQL functionalities
*   `apollo-server-express` for integrating Apollo Server with Express

Run the following command to install all dependencies:

bash

```bash
npm install express graphql apollo-server-express
```

Project Structure
-----------------

*   `index.js`: Main server file where Express and Apollo Server are configured.

API Schema
----------

### Types

#### `Book`

Represents a book with a title and author.

graphql

```graphql
type Book {
  title: String
  author: String
}
```

### Queries

#### `books`

Fetches a list of books. Optionally filters books by author.

*   Arguments:
    *   `author` (String): Name of the author to filter by.
*   Returns: `[Book]`

graphql

```graphql
type Query {
  books(author: String): [Book]
}
```

#### `hello`

A sample query to return a "Hello, world!" string.

*   Returns: `String`

graphql

```graphql
type Query {
  hello: String
}
```

API Resolvers
-------------

### Query Resolvers

#### `books`

Filters books based on the `author` argument.

javascript

```javascript
const resolvers = {
  Query: {
    books: (_, { author }) => {
      if (author) {
        return books.filter(book => book.author === author);
      }
      return books;
    },
  },
  // ...
};
```

#### `hello`

Returns a "Hello, world!" string.

javascript

```javascript
const resolvers = {
  Query: {
    hello: () => 'Hello, world!',
  },
  // ...
};
```

Running the Server
------------------

Run the server using the following command:

bash

```bash
node index.js
```

Your GraphQL server will be running at `http://localhost:4000/graphql`.

Example Queries
---------------

### Fetch All Books

graphql

```graphql
{
  books {
    title
    author
  }
}
```

### Fetch Books by a Specific Author

graphql

```graphql
{
  books(author: "J.K. Rowling") {
    title
    author
  }
}
```

### Fetch the Hello String

graphql

```graphql
{
  hello
}
```

