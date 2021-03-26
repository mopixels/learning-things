import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterPage from "./pages/character";
import HomePage from "./pages/homePage";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  <QueryClientProvider client={queryClient}>
    <Router>
      <Switch>
        <Route exact path="/">
          <HomePage />
        </Route>
        <Route path="/:character" component={CharacterPage} />
      </Switch>
    </Router>
  </QueryClientProvider>;
}

export default App;
