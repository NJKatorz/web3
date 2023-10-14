import { Context as SortedOpinionsProviderWrapper } from "contexts/sortedOpinions";
import { useContext } from 'react';

const Opinion = ({ opinion }) => {
  const { increaseVotes } = useContext(SortedOpinionsProviderWrapper);

  return (
    <div>
      <span>{`${opinion.text} : ${opinion.score} `} </span>
      <button onClick={() => increaseVotes(opinion.id)}>Vote</button>
    </div>
  );
};

export default Opinion;
