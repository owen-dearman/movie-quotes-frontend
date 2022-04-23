import { quotesInterface } from "./quotesInterface"


interface quoteListInterface {
    quotes: quotesInterface[]
    searchTerm: string
}

export function QuoteList (props: quoteListInterface): JSX.Element{
const filteredQuotes = props.quotes.filter((quote) => 
    quote.quote.toUpperCase().includes(props.searchTerm.toUpperCase()) ||
    quote.actorNAME.toUpperCase().includes(props.searchTerm.toUpperCase()) ||
    quote.movieNAME.toUpperCase().includes(props.searchTerm.toUpperCase()) ||
    quote.character.toUpperCase().includes(props.searchTerm.toUpperCase())
    )
    
const formattedQuotes = filteredQuotes.map((quote) => {
    return <div className="ContentBlock" key={quote.quoteID}>
        <h2>{quote.quote}</h2>
        <h3>{quote.actorNAME} ({quote.character})</h3>
        <h3>{quote.movieNAME}</h3>
        <p>{quote.comment}</p>
    </div>
    })

    return <>
        <p>Quotes: {filteredQuotes.length}</p>
        <div>{formattedQuotes}</div>
    </>
}
    