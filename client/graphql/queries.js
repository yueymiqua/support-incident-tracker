import { gql } from '@apollo/client';

export const GET_ALL_INCIDENTS = gql`
    {
        incidents {
            incidentId
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
            userId
            username
            password
            department
        }
    }
`;

export const GET_USER_BY_USERNAME = gql`
    query getUserByUsername($username: String!, $password: String!) {
        getUserByUsername (username: $username, password: $password) {
            userId
            username
            password
            department
        }
    }
`;