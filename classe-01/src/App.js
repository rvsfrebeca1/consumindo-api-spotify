import React, { useState } from "react";
import "./styles.css";

import getSpotifyToken from "./utils/getSpotifyToken";
import Card from "./components/Card.js";

const baseURL = (pesquisa) =>
  `https://api.spotify.com/v1/search?q=${pesquisa}&type=track&limit=10`;

function App() {
  const [pesquisa, setPesquisa] = useState("");
  const [track, setTrack] = useState([])
  const [carregando, setCarregando] = useState(false)
  const [erro, setErro] = useState('')

  async function handleSubmit(e) {
    e.preventDefault();
    const token = await getSpotifyToken()
    if (!pesquisa) return setTrack([]);
    setCarregando(true)
    try {
      const response = await fetch(baseURL(pesquisa), {
        headers: {
          'Authorization': token
        }
      })
      const { tracks } = await response.json()
      setTrack(tracks.items)
      console.log(tracks.items)
    } catch (error) {
      setErro(error.message)
      setTrack([])
    }

    setCarregando(false)
  }
  let i = 0

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={pesquisa}
          onChange={(e) => setPesquisa(e.target.value)}
        />
        {carregando && (<span className='loading'>Carregando...</span>)}
        {erro && (<span className='error'>{erro}</span>)}
      </form>
      {track.map(x => {
        return <Card key={i++} track={x}></Card>
      })}
    </div>
  );
}

export default App;
