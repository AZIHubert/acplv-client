import gql from 'graphql-tag';

export const FETCH_FRONT_PROJECTS_QUERY = gql`
    {
        getProjects {
            _id
            index
            title
            type {
                _id
                title
            }
            thumbnail {
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

export const FETCH_HOME_GENERAL_QUERY = gql`
    {
        getGeneral {
            whoAreWeFirst
            whoAreWeSecond
            email
        }
    }
`;
export const FETCH_ABOUT_GENERAL_QUERY = gql`
    {
        getGeneral {
            about
        }
    }
`;
export const FETCH_FOOTER_GENERAL_QUERY = gql`
    {
        getGeneral {
            instagramLink 
            facebookLink
            linkedinLink
        }
    }
`;
export const FETCH_CONTACT_GENERAL_QUERY = gql`
    {
        getGeneral {
            phone
            email
            adressCity
            adressStreet
            instagramLink
            facebookLink
            linkedinLink
        }
    }
`;

export const FETCH_USED_TYPES = gql`
    {
        getUsedTypes {
            _id
            title
        }
    }
`;

export const FETCH_FRONT_SERVICE_CATS = gql`
    {
        getServiceCats {
            _id
            title
        }
    }
`;
export const FETCH_SERVICE_CATS_WITH_SERVICES = gql`
    {
        getServiceCatsWithServices {
            _id
            title
            services{
                _id
                title
            }
        }
    }
`;

export const FETCH_CLIENTS_QUERY = gql`
    {
        getClients {
            _id
            title
        }
    }
`;

export const FETCH_TYPES_QUERY = gql` 
    {
        getTypes {
            _id
            title
        }
    }
`;

export const FETCH_PROJECTS_QUERY = gql`
{
    getProjects {
        _id
        display
        title
        type {
            _id
        },
        thumbnail {
            _id
            url
        }
    }
}
`;