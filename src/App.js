import { data } from './data';
import './App.css';
import { useState } from 'react';

function App() {
  const [person, setPerson] = useState(0)
  const {id, name, description, age, image} = data[person]

  const previousPerson = () => {
    setPerson((person => {
      person --

      if ( person < 0 ) {
        person = data.length - 1
      }
      return person
    }))

  }

  const nextPerson = () => {
    setPerson((person => {
      person ++

      if (person > data.length -1) {
        person = 0
      }

      return person
    }))
 

  }

  return (
    <div className="App">
    <div>
      <img src={image} width={400} alt="person" />
    </div>
    <div>
      <h1>{id} - {name}</h1>
    </div>
    <div>
      <h3>{description}</h3>
    </div>
    <div>
      <p>{age} years old</p>
    </div>
    <div>
      <button onClick={previousPerson} className='buttonNextAndPrevious'>PREVIOUS</button>
      <button onClick={nextPerson} className='buttonNextAndPrevious'>NEXT</button>
    </div>


    </div>
  );
}

export default App;
