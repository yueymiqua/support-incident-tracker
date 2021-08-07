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

    type User {
        id: Int!
        username: String!
        password: String!
        department: String!
    }
    
    type Query {
        incidents: [Incident]
        getAllUsers: [User]
        getUserById(id: String!): User
    }

    type Mutation {
        addIncident(
            id: String!
            description: String!
            department: String!
            priority: String!
            initiator: String!
            status: String!
            creation_date: String!
            updated_date: String
            resolver: String
            resolver_comments: String
        ): Incident!
        updateIncident(
            id: String!
            description: String!
            department: String!
            priority: String!
            initiator: String!
            status: String!
            creation_date: String!
            updated_date: String
            resolver: String
            resolver_comments: String
        ): Incident!
        addUser(
            userId: String!
            userName: String!
            password: String!
            department: String!
        ): User!
    }
`;

const resolvers = {
    Query: {
        incidents: () => knex('incidents').select('*'),
        getAllUsers: () => knex('users').select('*'),
        getUserById: (id) => knex('users').select('*').where( 'id', id )
    }
    // Mutation: {
    //     addIncident
    //     updateIncident
    //     addUser
    // }
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});