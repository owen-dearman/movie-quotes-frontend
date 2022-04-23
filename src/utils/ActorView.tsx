import { useState } from "react";
import { ActorList } from "./ActorList";
import { actorsInterface } from "./interfaces";

interface actorViewInterface {
  actors: actorsInterface[];
}

export function ActorView(props: actorViewInterface): JSX.Element {
  const [searchTerm, setSearchTerm] = useState<string>("");
  return (
    <>
      <h4>Filter Actors</h4>
      <input
        placeholder="Search"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ActorList actors={props.actors} searchTerm={searchTerm} />
    </>
  );
}
