import { actorsInterface } from "./interfaces";

interface ActorListInterface {
  actors: actorsInterface[];
  searchTerm: string;
}

export function ActorList(props: ActorListInterface): JSX.Element {
  const filteredactors = props.actors.filter((actor) =>
    actor.name.toUpperCase().includes(props.searchTerm.toUpperCase())
  );
  const formattedactors = filteredactors.map((actor) => {
    return (
      <div className="ContentBlock" key={actor.id}>
        <h2>{actor.name}</h2>
        <h3>{actor.nationality}</h3>
        <h3>{actor.dob && actor.dob.slice(0, 10)}</h3>
        {actor.img && (
          <img
            className="image"
            alt={"photo of " + actor.name}
            src={actor.img}
          ></img>
        )}
      </div>
    );
  });

  return (
    <>
      <p>Actors: {filteredactors.length}</p>
      <div>{formattedactors}</div>
    </>
  );
}
