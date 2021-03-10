import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import CharacterPage from "./pages/character";
import HomePage from "./pages/homePage";

function App() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [characters, setCharacters] = useState("");

  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character/1,2,3,4,5,6,7,8,9,10")
      .then((res) => res.json())
      .then(
        (result) => {
          setCharacters(result);
          setIsLoaded(true);
        },
        (error) => {
          setError(error);
          setIsLoaded(true);
        }
      );
  }, []);

  if (error) {
    return <div>Error: sorry something went wrong please try again later</div>;
  } else if (!isLoaded) {
    return <div>Loading...</div>;
  } else {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <HomePage data={characters} />
          </Route>

          <Route path="/:character">
            <CharacterPage data={characters} />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
