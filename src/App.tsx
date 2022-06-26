import { ApolloProvider } from "@apollo/client";
import { BrowserRouter } from "react-router-dom";
import { client } from "./lib/Apollo";
import { Router } from "./Router";

function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </ApolloProvider>
    </>
  );
}

export default App;
