import React from 'react';
import './App.css';


import Jobs from './Jobs';


const mockJobs = [
  {title: 'SSP 1',  company: 'Google'},
  {title: 'SSP 1',  company: 'Glassdoor'},
  {title: 'SSP 1',  company: 'Facebook'},
  {title: 'SSP 1',  company: 'Linkedin'}
]

function App() {
  return (
    <div className="App">
      <Jobs jobs={mockJobs} />
    </div>
  );
}

export default App;
