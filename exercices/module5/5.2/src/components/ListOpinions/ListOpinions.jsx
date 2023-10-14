import { Context as SortedOpinionsProviderWrapper } from "contexts/sortedOpinions";
import { useContext } from 'react';

const ListOpinions = () => {
    const { sortedOpinions, increaseVotes } = useContext(SortedOpinionsProviderWrapper)
    return (
        <div>
            {sortedOpinions.map((opinion) => (
                <div>    {opinion.text} : {opinion.score}
                    <button onClick={() => increaseVotes(opinion.id)}> Vote </button>
                </div>
            )
            )}
        </div>
    )
}


export default ListOpinions;

/**
  
import Opinion from "components/ListOpinions/Opinion";

const ListOpinions = () => {
    const { sortedOpinions } = useContext(SortedOpinionsProviderWrapper)
    return (
        <div>

            {sortedOpinions.map((opinion) => (
                <Opinion key={opinion.id} opinion={opinion} />
            )
            )}

        </div>
    )
}


 */