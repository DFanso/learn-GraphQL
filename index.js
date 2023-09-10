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
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

// Resolvers
const resolvers = {
  Query: {
    books: () => books,
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
