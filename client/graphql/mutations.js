import { gql } from '@apollo/client';

export const ADD_INCIDENT = gql`
    mutation addIncident ($incidentId: ID!, $description: String!, $department: String!, $priority: String!, $initiator: String!, $status: String! $creation_date: String!) {
        addIncident (incidentId: $incidentId, description: $description, department: $department, priority: $priority, initiator: $initiator, status: $status, creation_date: $creation_date) {
            incidentId
            description
            department
            priority
            initiator
            status
            creation_date
        }
    }
`;

export const UPDATE_INCIDENT = gql`
    mutation updateIncident ($incidentId: ID!, $status: String, $updated_date: String, $resolver: String, $resolver_comments: String) {
        updateIncident (incidentId: $incidentId, status: $status, updated_date: $updated_date, resolver: $resolver, resolver_comments: $resolver_comments) {
            incidentId
            status
            updated_date
            resolver
            resolver_comments
        }
    }
`;

export const ADD_USER = gql`
   mutation addUser ($userId: ID!, $username: String!, $password: String!, $department: String!) {
        addUser (userId: $userId, username: $username, password: $password, department: $department) {
            userId
            username
            password
            department
        }
   }
`; 