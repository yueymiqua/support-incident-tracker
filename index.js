const { ApolloServer, gql } = require('apollo-server');

const knex = require("knex")({
    client: "pg",
    connection: {
      host: "localhost",
      user: "postgres",
      password: "idontlikeneone",
      database: "incidents-db"
    }
  });

const typeDefs = gql`
    type Incident {
        id: Int!
        description: String!
        department: String!
        priority: String!
        initiator: String!
        status: String!
        creation_date: String!
        updated_date: String
        resolver: String
        resolver_comments: String
    }
    
    type Query {
        incidents: [Incident]
    }
`;

const resolvers = {
    Query: {
        incidents: () => knex('incidents').select('*')
    }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});