import { baseUrl } from "./utils/url";
import { useEffect, useState } from "react";
import { actorsInterface, quotesInterface } from "./utils/interfaces";
import { QuotesView } from "./utils/QuotesView";
import { MovieView } from "./utils/MovieView";
import { ActorView } from "./utils/ActorView";

function App(): JSX.Element {
  const [quotes, setQuotes] = useState<quotesInterface[]>([]);
  const [actors, setActors] = useState<actorsInterface[]>([]);
  const [view, setView] = useState<number>(1);

  useEffect(() => {
    const url = baseUrl + "/quotes";
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonBody: quotesInterface[] = await response.json();
      setQuotes(jsonBody);
    };
    fetchData();
  }, [quotes]);

  useEffect(() => {
    const url = baseUrl + "/actors";
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonBody: actorsInterface[] = await response.json();
      setActors(jsonBody);
    };
    fetchData();
  }, [actors]);

  return (
    <div>
      <h1>The Greatest Movie Quotes!</h1>
      <hr></hr>
      <h4>Navigation</h4>
      <button onClick={() => setView(1)}>Quotes</button>
      <button onClick={() => setView(2)}>Movies</button>
      <button onClick={() => setView(3)}>Actors</button>

      {view === 1 && <QuotesView quotes={quotes} />}
      {view === 2 && <MovieView />}
      {view === 3 && <ActorView actors={actors} />}
    </div>
  );
}

export default App;
