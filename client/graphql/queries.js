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
        users {
            id
            username
            password
            department
        }
    }
`;

export const GET_USER_BY_ID = gql`
    {
        getUserById (id: $id) {
            id
            username
            password
            department
        }
    }
`;