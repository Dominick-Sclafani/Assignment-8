import './App.css';
import {useState, useEffect} from "react";

function App() {
const baseURL = 'http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=${process.env.REACT_APP_API_KEY'};
const [gif, setGifs] = useState([]);
const loading, setLoading = useState(true);
console.log (process.env.REACT_APP_KEY)


  return (
    <div className="App">
      
      
    </div>
  );
}

export default App;
