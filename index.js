// type input for UpdateIncidentInput
// import typeDefs and resolvers js files to here
// graphql studio to return successful mutations

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
        id: ID!
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
        id: ID!
        username: String!
        password: String!
        department: String!
    }
    
    type Query {
        incidents: [Incident]
        users: [User]
        getUserById(id: ID!): User
    }

    input NewIncidentInput {
        id: ID!
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

    input NewUserInput {
        id: ID!
        username: String!
        password: String!
        department: String!
    }

    type Mutation {
        addIncident(input: NewIncidentInput!): Incident!
        updateIncident(id: ID!, updated_date: String, resolver: String, resolver_comments: String): Incident!
        addUser(input: NewUserInput!): User!
    }
`;

const resolvers = {
    Query: {
        incidents: () => knex('incidents').select('*'),
        users: () => knex('users').select('*'),
        getUserById: (_, {id}) => knex('users').where( 'id', id ).first()
    },
    Mutation: {
        addIncident: (_, {input}) => {
            const incident = knex("incidents").insert(input)
            return incident
        },
        updateIncident: (_, { id, updated_date, resolver, resolver_comments }) => 
            knex("incidents")
            .where({ id: id })
            .update({
                updated_date: updated_date, 
                resolver: resolver, 
                resolver_comments: resolver_comments 
            }),
        addUser: (_, {input}) => {
            const user = knex("users").insert(input)
            return user
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});