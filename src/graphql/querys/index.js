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
            instagram {
                isActive
                link
            }
            facebook {
                isActive
                link
            }
            linkedin {
                isActive
                link
            }
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
            instagram {
                isActive
                link
            }
            facebook {
                isActive
                link
            }
            linkedin {
                isActive
                link
            }
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