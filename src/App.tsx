import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterPage from "./pages/character";
import HomePage from "./pages/homePage";
import { QueryClient, QueryClientProvider } from "react-query";
import { ContextProvider } from "./Context";

const queryClient = new QueryClient();

const App: React.FC = () => (
  <ContextProvider>
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage />
          </Route>
          <Route path="/:character" component={CharacterPage} />
        </Switch>
      </Router>
    </QueryClientProvider>
  </ContextProvider>
);

export default App;
