import React, { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

const Context = React.createContext(null)

const ProviderWrapper = (props) => {

  const [sortedOpinions, setSortedOpinions] = useState([])
  

  const increaseVotes = (opinionId) => {
    const newSortedOpinions = [...sortedOpinions];
    const opinionToUpdate = newSortedOpinions.find(
      (opinion) => opinion.id === opinionId
    );
    if (!opinionToUpdate) return undefined;

    opinionToUpdate.score += 1;
    newSortedOpinions.sort((a, b) => b.score - a.score);
    setSortedOpinions(newSortedOpinions)

  }

  const createOpinion = (opinion) => {
    const newOpinion = sortedOpinions.concat(
      {
        id: uuidv4(),
        text: opinion,
        score: 1
      }
    )

    sortedOpinions.sort((a, b) => b.score - a.score)
    setSortedOpinions(newOpinion)
  }

  const exposedValue = {
    increaseVotes,
    sortedOpinions,
    createOpinion,
  }

  return <Context.Provider value={exposedValue}>
    {props.children}
  </Context.Provider>;
}

export {
  Context,
  ProviderWrapper,
}