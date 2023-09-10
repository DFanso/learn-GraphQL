const express = require('express');
const { ApolloServer, gql } = require('apollo-server-express');

// Initialize Express App
const app = express();
const port = 4000;

// GraphQL Schema Definition
const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
    hello: String
  }
`;

// Sample Book Data
const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling',
    },
    {
      title: 'Harry Potter and the Prisoner of Azkaban',
      author: 'J.K. Rowling',
    },
    {
      title: 'Harry Potter and the Goblet of Fire',
      author: 'J.K. Rowling',
    },
    {
      title: '1984',
      author: 'George Orwell',
    },
    {
      title: 'Animal Farm',
      author: 'George Orwell',
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton',
    },
    {
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
  ];

// Resolvers
const resolvers = {
    Query: {
      books: (_, { author }) => {
        if (author) {
          return books.filter(book => book.author === author);
        }
        return books;
      },
      hello: () => 'Hello, world!',
    },
  };

// Initialize Apollo Server
const server = new ApolloServer({ typeDefs, resolvers });

// Start Apollo Server and Apply Middleware
(async () => {
  await server.start();
  server.applyMiddleware({ app });

  // Start the Server
  app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}${server.graphqlPath}`);
  });
})();
