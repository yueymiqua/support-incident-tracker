import { gql } from '@apollo/client';

export const ADD_INCIDENT = gql`
    mutation addIncident ($id: String!, $description: String!, $department: String!, $priority: String!, $initiator: String!, $creation_date: String!) {
        addIncident (id: $id, description: $description, department: $department, priority: $priority, initiator: $initiator, creation_date: $creation_date) {
            id
            description
            department
            priority
            initiator
            creation_date
        }
    }
`;

export const UPDATE_INCIDENT = gql`
    mutation updateIncident ($id: String!) {
        updateIncident (id: $id) {
            updated_date
            resolver
            resolver_comments
        }
    }
`;

export const ADD_USER = gql`
   mutation addUser ($id: String!, $username: String!, $password: String!, $department: String!) {
      addUser (id: $id, username: $username, password: $password, department: $department) {
        id
        username
        password
        department
     }
   }
`; 