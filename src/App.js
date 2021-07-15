import React, {useState} from 'react';
import data from './data.js';

function App() {
    const [quote, setQuote] = useState(data[0]);
    const [count, setCount] = useState(0);

    const handleClick = () => {
        let randNum = Math.floor(Math.random() * data.length);
        setCount(randNum);
        setQuote(data[count]);
        console.log(quote);
        console.log(count);
    }
    
    return (
        <div>
             <div key={quote.id}>
                <h2>{quote.quote}</h2>
                <h6>{quote.name}</h6>
            </div>
            <button type="button" onClick={handleClick}>New quote</button>
        </div>
    )
}

export default App