import { Context as SortedOpinionsProviderWrapper } from "contexts/sortedOpinions";
import { useContext } from 'react';

const VoteButton = () => {
   const { increaseVotes } = useContext(SortedOpinionsProviderWrapper)
   return (
      <button onClick={increaseVotes}> Vote </button>
   )
}

export default VoteButton;