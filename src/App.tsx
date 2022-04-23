import { baseUrl } from "./utils/url";
import {useEffect, useState} from 'react'
import { QuoteList } from "./utils/QuoteList";
import { quotesInterface, quoteObjectInterface } from "./utils/quotesInterface";
import axios from 'axios'




function App(): JSX.Element {
  const [data, setData] = useState<quotesInterface[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("")
  const [movieText, setMovieText] = useState<string>("")
  const [CharacterText, setCharacterText] = useState<string>("")
  const [actorText, setActorText] = useState<string>("")
  const [quoteText, setQuoteText] = useState<string>("")
  const [commentText, setCommentText] = useState<string>("")

  useEffect(() => {
    const url = baseUrl + "/quotes";
    const fetchData = async () => {
      const response = await fetch(url);
      const jsonBody: quotesInterface[] = await response.json();
       setData(jsonBody);
    };
    fetchData();
  }, [data]);

  function postToServer(quoteObject: quoteObjectInterface ){
    axios.post(baseUrl + "/quotes", quoteObject)
    console.log("quote sent")
  }

  function resetQuoteInputs(){
    setMovieText("")
    setActorText("")
    setCharacterText("")
    setQuoteText("")
    setCommentText("")
  }

  const handleSubmit = (mov:string, char:string, act:string, quot:string, com:string|null) => {
    if (com === ""){
      com = null
    }
    const newQuote = {
      "quote": quot,
      "movie": mov,
      "character": char,
      "actor": act,
      "comment": com
    }
    postToServer(newQuote)
    resetQuoteInputs()
  }


  return <div>
    <h1>The Greatest Movie Quotes!</h1>
    <h4>Add A New Quote</h4>
    <input
      placeholder="Movie"
      value = {movieText}
      onChange={(e) => setMovieText(e.target.value)}
    />
    <input
      placeholder="Character"
      value = {CharacterText}
      onChange = {(e) => setCharacterText(e.target.value)}
    />
    <input
      placeholder="Actor"
      value = {actorText}
      onChange = {(e) => setActorText(e.target.value)}
    />
    <input 
      placeholder="Quote"
      value = {quoteText}
      onChange = {(e) => setQuoteText(e.target.value)}

    />
    <input
      placeholder="Comment (optional)"
      value = {commentText}
      onChange = {(e) => setCommentText(e.target.value)}
    />
    <button
      onClick={() => handleSubmit(movieText, CharacterText, actorText, quoteText, commentText)}
    >Submit</button>
    <hr></hr>
    <h4>Navigation</h4>
    <button>Quotes</button>
    <button>Actors</button>
    <button>Movies</button>
    <h4>Filter Quotes</h4>
    <input
    placeholder="Search"
    onChange={(e) => setSearchTerm(e.target.value)} />
    <QuoteList quotes={data} searchTerm={searchTerm} />
  </div>
}

export default App;
