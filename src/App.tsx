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
import './App.css';
import { ThemeContextProvider } from './Components/Context/ThemeContext';
import { Box } from './Components/Context/Box';
import { UserContextProvider } from './Components/Context/UserContext';
import { User } from './Components/Context/User';
import { MutableRef } from './Components/Context/ref/MutableRef';
import { DomRef } from './Components/Context/ref/DomRef';
import Counter from './Components/class/Counter';
import { Private } from './Components/auth/Private';
import { Profile } from './Components/auth/Profile';
import { List } from './Components/generics/List';
import { RandomNumber } from './Components/restriction/RandomNumber';
import { Roast } from './Components/templateliterals/Roast';
import { HTMLButton } from './Components/html/Button'
import { CustomComponent } from './Components/html/CustomComponent';
import { Text } from './Components/polymorphic/Text';

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
      <ThemeContextProvider>
        <Box />
      </ThemeContextProvider>

      <UserContextProvider>
        <User />
      </UserContextProvider>
      <DomRef></DomRef>
      <MutableRef></MutableRef>

      <Counter message={'Count Value'} />

      <Private isLoggedIn={true} component={Profile} />
      <List items={['First', 'Second', 'Third']} onClick={(item) => console.log(item)} />

      {/* <List items={[1, 2, 3]} onClick={(item) => console.log(item)} /> */}

      {/* <List items={[
        {
          id: 1,
          first: 'karthik',
          last: 'T R',
        },
        {
          id: 2,
          first: 'Clark',
          last: 'kant'
        },
        {
          id: 3,
          first: 'Princess',
          last: 'Diano'
        }
      ]} onClick={(item) => console.log(item)} /> */}

      <RandomNumber value={10} isPositive />

      <Roast position='center' />
      <HTMLButton varient='primary' onClick={() => console.log('clicked')}>HTML Button check</HTMLButton>
      <CustomComponent name='karthik' isLoggedin={false} number={10} />
      <Text size='lg' as='h1' color='primary'>Value from Text Props </Text>
      <Text size='sm' as='p' color='primary'>Value from Text Props SM </Text>
      <Text size='md' as='label' htmlFor='valuId' >MD device </Text>
    </div>
  );
}

export default App;
