import { ApolloServer, gql } from 'apollo-server';
import Knex from 'knex';

const knex = Knex({
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
        incidentId: ID!
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
        userId: ID!
        username: String!
        password: String!
        department: String!
    }
    
    type Query {
        incidents: [Incident]
        users: [User]
        getUserByUsername(username: String!, password: String!): User
    }

    type Mutation {
        addIncident(incidentId: ID!, description: String!, department: String!, priority: String!, initiator: String!, status: String!, creation_date: String!): Incident!
        updateIncident(incidentId: ID!, status: String, updated_date: String, resolver: String, resolver_comments: String): Incident!
        addUser(userId: ID!, username: String!, password: String!, department: String!): User!
    }
`;

const resolvers = {
    Query: {
        incidents: () => knex('incidents').select('*'),
        users: () => knex('users').select('*'),
        getUserByUsername: (_, { username }) => knex('users').where( 'username', username ).first()
    },
    Mutation: {
        addIncident: async (_, { incidentId, description, department, priority, initiator, status, creation_date}) => {
            const [incident] = await knex("incidents" ).returning('*').insert({
                incidentId: incidentId,
                description: description,
                department: department, 
                priority: priority,
                initiator: initiator,
                status: status,
                creation_date: creation_date
            })
            return incident
        },
        updateIncident: async (_, { incidentId, status, updated_date, resolver, resolver_comments }) => {
            const [returnedIncident] = await knex("incidents")
            .where({ incidentId: incidentId })
            .returning('*')
            .update({
                status: status,
                updated_date: updated_date, 
                resolver: resolver, 
                resolver_comments: resolver_comments 
            })
            return returnedIncident
        },
        addUser: async (_, { userId, username, password, department }) => {
            const [user] = await knex("users").returning('*').insert({
                userId: userId,
                username: username,
                password: password,
                department: department
            })
            return user
        }
    }
}

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
    console.log(`Server ready at ${url}`);
});