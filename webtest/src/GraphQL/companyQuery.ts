import { useQuery, gql } from "@apollo/client";

const COMPANY_QUERY = gql`
  query ExampleQuery {
    company {
      ceo
      cto
      name
    }
  }
`;

export default function CompanyQuery() {
  const { loading, error, data } = useQuery(COMPANY_QUERY);

  return {
    loading,
    error,
    data,
  }
}
