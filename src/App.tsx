import './App.css';
import Array from './Components/Array';
import Greet from './Components/Greet';
import Person from './Components/Person';
import Status from './Components/Status';
import Child from './Components/Child';
import Oscar from './Components/Oscar';
import { Button, EventButton, ChangeButton } from './Components/Button';
import Stylecom from './Components/Styles/Stylecom';
import { Logged, LoggedIn } from './Components/State/LoggedIn';
import Reducefun from './Components/Reducer/Reducefun';

function App() {

  const round = { fullname: 'karthik', work: "developer" }

  const arr = [
    {
      first: 'karthik',
      last: 'tr'
    },
    {
      first: 'venkat',
      last: 'tr'
    },
    {
      first: 'kumar',
      last: 'ravi'
    }
  ]

  return (
    <div className="App">
      <Greet name='karthik' number={20} isLoggedin={true} />
      <Person round={round} />
      <Array list={arr} />
      <Status status='loading' />
      <Oscar><Child>Child props data passing</Child></Oscar>
      <Button handleClick={() => console.log('Button clicked')}></Button>
      <EventButton handleClick={(e, id) => console.log('Event Button', e, id)}></EventButton>
      <ChangeButton input="karthik" />
      <Stylecom style={{ border: '1px solid red', padding: '1rem' }} />

      <LoggedIn />
      <Logged />
      <Reducefun />
    </div>
  );
}

export default App;
