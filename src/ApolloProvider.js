import React from 'react';
import App from './App';
import ApolloClient from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
// import { createHttpLink } from 'apollo-link-http';
import { ApolloProvider } from '@apollo/react-hooks';
import { setContext } from 'apollo-link-context';
import { createUploadLink } from "apollo-upload-client/lib";

const link = createUploadLink({
    uri: 'http://localhost:5000/graphql'
});

// const httpLink = createHttpLink({
//     uri: 'http://localhost:5000/graphql'
// });

const authLink = setContext(() => {
    const token = localStorage.getItem('jwtToken');
    return {
        headers: {
            authorization: token ? `Bearer ${token}` : ''
        }
    }
});

const client = new ApolloClient({
    link: authLink.concat(link),
    cache: new InMemoryCache()
});


export default (
    <ApolloProvider client={client}>
        <React.Fragment>
            <App/>
        </React.Fragment>
    </ApolloProvider>
);