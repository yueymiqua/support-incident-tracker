const { gql } = require('apollo-server');

export const resolvers = {
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