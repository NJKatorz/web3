import BadButton from 'components/Button/BadButton';
import GoodButton from 'components/Button/GoodButton';
import OkButton from 'components/Button/OkButton';
import ResetButton from 'components/Button/ResetButton';
import { Context as CountersContext } from 'contexts/countersContext';
import { useContext } from 'react';

import './App.css'
const App = () => {
  const { good, ok, bad } = useContext(CountersContext)

  return (
    <div>
      <ul>
        <li> Good : {good} <GoodButton /> </li>
        <li> Ok : {ok} <OkButton /> </li>
        <li> Bad : {bad} <BadButton /> </li>
      </ul>
      <ResetButton />
    </div>
  )

}
export default App
