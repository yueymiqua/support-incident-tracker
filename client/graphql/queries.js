import { gql } from '@apollo/client';

export const GET_INCIDENTS = gql`
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