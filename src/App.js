import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const [quote, setQuote] = useState(null);
  const [author, setAuthor] = useState(null);  
  
  useEffect(() => {
    getQuote();
  }, [])

  const getQuote = () => {
    fetch('https://api.quotable.io/random')
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        console.log(result)
        setQuote(result.content);
        setAuthor(result.author);
      })
      .catch((error) => console.log(error))
  }
  
  return (
    <div className="App">
      <div id='quote-box'>
        <h1 id='text'><span>"</span>{quote}<span>"</span></h1>
        <p id='author'>{author}</p>
        <div className='links'>
          <button id='new-quote' onClick={getQuote} className='btn'>new quote</button>
          <a href={'twitter.com/intent/tweet?text=' + quote + ',' + author} id='tweet-quote' target='_blank' className='btn'>tweet quote</a>
        </div>
      </div>
    </div>
  );
}

export default App;
