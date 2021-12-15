import logo from './logo.svg';
import { useState, useEffect } from 'react';
import './App.css';


function App() {
  const [results, setResults] = useState([]); 

  const printHelloWorld = () =>{
    console.log('Hello World');
  };

  useEffect(() => {
    fetchData();
  }, []);
  
  const fetchData = () => {
    fetch('https://ac.cnstrc.com/search/apple?key=key_fygjntHGW7usvxC8')
        .then(response => response.json())
        .then(data => {
          console.log('data: ', data);
          const { response : { results } } = data;
          console.log('results: ', results[0]);
          setResults(results);
          
    });
  };
  return (
    <div className="App">
      {results.map((e, i) => {
        return (
          <div key={i} className='wrapper'>
            <p>{e.value}</p>
            <img src={e.data.image_url} alt='desc' width='200' />
          </div>
        );
      })}
    </div>
  );
}

export default App;
