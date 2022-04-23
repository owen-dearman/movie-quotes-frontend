import { useState } from "react";
import axios from "axios";
import { baseUrl } from "./url";
import { quoteObjectInterface, quotesInterface } from "./interfaces";
import { QuoteList } from "./QuoteList";

interface quotesViewInterface {
  quotes: quotesInterface[];
}

export function QuotesView(props: quotesViewInterface): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [movieText, setMovieText] = useState<string>("");
  const [CharacterText, setCharacterText] = useState<string>("");
  const [actorText, setActorText] = useState<string>("");
  const [quoteText, setQuoteText] = useState<string>("");
  const [commentText, setCommentText] = useState<string>("");

  const handleSubmit = (
    mov: string,
    char: string,
    act: string,
    quot: string,
    com: string | null
  ) => {
    if (com === "") {
      com = null;
    }
    const newQuote = {
      quote: quot,
      movie: mov,
      character: char,
      actor: act,
      comment: com,
    };
    postToServer(newQuote);
    resetQuoteInputs();
  };

  function postToServer(quoteObject: quoteObjectInterface) {
    axios.post(baseUrl + "/quotes", quoteObject);
    console.log("quote sent");
  }

  function resetQuoteInputs() {
    setMovieText("");
    setActorText("");
    setCharacterText("");
    setQuoteText("");
    setCommentText("");
  }

  return (
    <>
      <h4>Add A New Quote</h4>
      <input
        placeholder="Movie"
        value={movieText}
        onChange={(e) => setMovieText(e.target.value)}
      />
      <input
        placeholder="Character"
        value={CharacterText}
        onChange={(e) => setCharacterText(e.target.value)}
      />
      <input
        placeholder="Actor"
        value={actorText}
        onChange={(e) => setActorText(e.target.value)}
      />
      <input
        placeholder="Quote"
        value={quoteText}
        onChange={(e) => setQuoteText(e.target.value)}
      />
      <input
        placeholder="Comment (optional)"
        value={commentText}
        onChange={(e) => setCommentText(e.target.value)}
      />
      <button
        onClick={() =>
          handleSubmit(
            movieText,
            CharacterText,
            actorText,
            quoteText,
            commentText
          )
        }
      >
        Submit
      </button>
      <h4>Filter Quotes</h4>
      <input
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <QuoteList quotes={props.quotes} searchTerm={searchTerm} />
    </>
  );
}
