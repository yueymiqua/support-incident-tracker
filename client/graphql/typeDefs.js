import { gql } from ('apollo-server');

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
        getUserById(userId: ID!): User
    }

    input NewIncidentInput {
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

    input NewUserInput {
        userId: ID!
        username: String!
        password: String!
        department: String!
    }

    type Mutation {
        addIncident(input: NewIncidentInput!): Incident!
        updateIncident(incidentId: ID!, status: String, updated_date: String, resolver: String, resolver_comments: String): Incident!
        addUser(input: NewUserInput!): User!
    }
`;

exports.typeDefs = typeDefs;