import { gql } from '@apollo/client';

export const GET_ALL_INCIDENTS = gql`
    {
        incidents {
            id
            description
            department
            priority
            initiator
            status
            creation_date
            updated_date
            resolver
            resolver_comments
        }
    }
`;

export const GET_ALL_USERS = gql`
    {
        getAllUsers {
            id
            username
            password
            department
        }
    }
`;

export const GET_USER_BY_ID = gql`
    query getUserById ($id: String!) {
        getUserById (id: $id) {
            id
            username
            password
            department
        }
    }
`;