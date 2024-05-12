import { gql } from "graphql-tag";

export const resolvers = {
  Query: {
    hello: () => "world",
  },
};

export const typeDefs = gql`
  type Query {
    hello: String
  }

  type Transaction {
    bank: Bank!
    category
  }
`;
