import "./App.css";
import { useState, useEffect } from "react";
import SearchField from "./components/SearchField";

function App() {
  const baseURL =
    "http://api.giphy.com/v1/gifs/search?q=SEARCH+TERM+GOES+HERE&api_key=${process.env.REACT_APP_API_KEY";
  const [search, setSearch] = useState(""); //set state for search text
  const [gifs, setGifs] = useState([]); //set state for gifs
  const [loading, setLoading] = useState(false); //set state for loading

  let searchGif = () => {
    if (search.length > 0) {
      setLoading(true);
      fetch(baseURL + search)
        .then((res) => {
          setLoading(true);
          return res.json();
        })
        .then((result) => {
          setGifs(
            result.data.map((gif) => {
              return gif.images.fixed_height.url;
            })
          );
        })
        //error catching so website does not crash
        .catch(() => {
          setLoading(false);
          console.log("This did not work");
        });
    }
  };

  return (
    <div className="header">
      <>
        <p>Search GIFS</p>
        <input value={search} onChange={(e) => setSearch(e.target.value)} />
        <button onClick={searchGif}>Search</button>
        {gifs.map((gif) => {
          //shows the gifs
          return <img src={gif} />;
        })}
      </>
    </div>
  );
}

export default App;
