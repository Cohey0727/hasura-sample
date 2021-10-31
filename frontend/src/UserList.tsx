import { ApolloClient, NormalizedCacheObject, useQuery } from "@apollo/client";
import { gql } from "@apollo/client";
import React from "react";

const GET_USERS = gql`
  query getUsers {
    users {
      email
      id
      name
    }
  }
`;

type Props = {};
const UserList: React.FC<Props> = () => {
  const { loading, error, data } = useQuery(GET_USERS);
  console.debug({ loading, error, data });
  return <>Hello</>;
};

export default UserList;
