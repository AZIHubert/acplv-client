import gql from 'graphql-tag';

export const FETCH_FRONT_PROJECTS_QUERY = gql`
    {
    getProjects {
        _id
        index
        title
        type {
        title
        }
        thumbnailUrl {
        url
        }
    }
    }
`;

export const FETCH_FRONT_CLIENT_QUERY = gql`
    {
        getClients {
            _id
            title
        }
    }
`;