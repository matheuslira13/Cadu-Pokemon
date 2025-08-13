import { client } from "@/services/apollo.service";
import { ApolloProvider } from "@apollo/client";
import HomeScreen from "./Home";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <HomeScreen />
    </ApolloProvider>
  );
}
