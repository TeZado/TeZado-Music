import {useState } from 'react'


export default function Suggestions(songid) {
  
  let [suggestionId, setSuggestionId] = useState([])
 const suggestionsLoad = async ()=>{
    const songFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/songs/${ido}/suggestions`);
    setSuggestionId(await songFetch.json())

    }

  

  
  return (
    <>
   <button onClick={suggestionsLoad}>sugg</button>
    </>
  )
}
