export interface quotesInterface {
    quoteID: number,
    quote: string,
    character: string,
    movieNAME: string,
    actorNAME: string,
    comment: string
  }

export interface quoteObjectInterface {
  quote: string,
  movie: string,
  character: string,
  actor: string,
  comment: string|null,
}