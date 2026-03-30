

import './App.css';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

function App() {
  const [selectedDate, setSelectedDate] = useState(null);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Flight Schedule</h1>
        <DatePicker
          selected={selectedDate}
          onChange={(date) => setSelectedDate(date)}
          inline
        />
        <button onClick={() => alert('Continue clicked!')}>Continue</button>
      </header>
    </div>
  );
}

export default App;