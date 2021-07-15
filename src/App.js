import React, {useState, useRef, useEffect} from 'react';
import data from './data.js';
import './index.css';

 const colorChange = () => {
        let red = Math.floor(Math.random() * 256);
        let green = Math.floor(Math.random() * 256);
        let blue = Math.floor(Math.random() * 256);

        let color = `rgb(${red},${green},${blue})`
        return color;
    }

function App() {
    const [quote, setQuote] = useState(data[0]);
    const [count, setCount] = useState(0);
    const reference = useRef(null);
    const buttonColor = useRef(null);

    const handleClick = () => {
        let randNum = Math.floor(Math.random() * data.length);
        setCount(randNum);
        setQuote(data[count]);
        
    }
    useEffect(() => {
        reference.current.style.background = colorChange();
        buttonColor.current.style.background = colorChange();
    })
    return (
         <main className="container" ref={reference}>
             <div key={quote.id} className="quoteContainer">
                <h2 className="quote" ref={buttonColor}>{quote.quote}</h2>
                <h6 className="author">{quote.name}</h6>
                <button className="btn" ref={buttonColor} type="button" onClick={handleClick}>New quote</button>
            </div>
         </main>
    )
} 

export default App