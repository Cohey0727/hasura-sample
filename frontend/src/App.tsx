import React, { useState } from "react";
import {
  ApolloClient,
  ApolloProvider,
  InMemoryCache,
  HttpLink,
} from "@apollo/client";
import "./App.css";
import env from "./env";
import UserList from "./UserList";

const createApolloClient = () => {
  return new ApolloClient({
    link: new HttpLink({
      uri: `${env.hasuraEndpoint}/v1/graphql`,
      headers: {
        "content-type": "application/json",
        "x-hasura-admin-secret": env.hasuraSecret,
      },
    }),
    cache: new InMemoryCache(),
  });
};

function App() {
  const [client, setClient] = useState(createApolloClient());
  console.debug({ env });
  return (
    <ApolloProvider client={client}>
      <div className="App">
        <UserList />
      </div>
    </ApolloProvider>
  );
}

export default App;
