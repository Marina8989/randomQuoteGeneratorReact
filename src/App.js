import React, {useState, useRef, useEffect} from 'react';
import data from './data.js';
import './index.css';

function App() {
    const [quote, setQuote] = useState(data[0]);
    const [count, setCount] = useState(0);
    const reference = useRef(null);

    const handleClick = () => {
        let randNum = Math.floor(Math.random() * data.length);
        setCount(randNum);
        setQuote(data[count]);
        console.log(reference.current);
        console.log(quote);
        console.log(count);
        console.log(reference.current)
        reference.current.style.background = 'pink';
    }
    useEffect(() => {
        // reference.current.style.background = 'pink';
    })
    
    return (
         <main className="container" ref={reference}>
             <div key={quote.id} className="quoteContainer">
                <h2 className="quote">{quote.quote}</h2>
                <h6 className="author">{quote.name}</h6>
                <button className="btn" type="button" onClick={handleClick}>New quote</button>
            </div>
         </main>
    )
} 

export default App