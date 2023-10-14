import { Context as SortedOpinionsProviderWrapper } from "contexts/sortedOpinions";
import { useContext, useState } from 'react';

const AddOpinion = () => {

   const [newOpinion, setNewOpinion] = useState('');
   const { createOpinion } = useContext(SortedOpinionsProviderWrapper)

   const handleOnChange = (e) => setNewOpinion(e.target.value);

   const handleOnSubmit = (e) => {
      e.preventDefault();
      createOpinion(newOpinion);
      setNewOpinion('');
   };

   return (
      <form onSubmit={handleOnSubmit}>
         <input value={newOpinion} onChange={handleOnChange} />
         <button type="submit"> Add Opinion </button>
      </form>
   );

}

export default AddOpinion;