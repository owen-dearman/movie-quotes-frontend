import { quotesInterface } from "./quotesInterface"


interface quoteListInterface {
    quotes: quotesInterface[]
}

export function QuoteList (props: quoteListInterface): JSX.Element{
const formattedQuotes = props.quotes.map((quote) => {
    return <div key = {quote.quoteID}>
        <h2>{quote.quote}</h2>
        <h3>{quote.actorNAME} ({quote.character})</h3>
        <h3>{quote.movieNAME}</h3>
        <p>{quote.comment}</p>
    </div>
    })
    return <div>{formattedQuotes}</div>
}
    