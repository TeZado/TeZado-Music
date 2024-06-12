import {useState } from 'react'
import 'react-h5-audio-player/lib/styles.css';
import '../App.css'
import '../AppS.sass'
import { TailSpin } from 'react-loader-spinner'
import Player from './Player';
import Suggestions from './Suggestions';


export default function Home(props) {
  let [search, setSearch] = useState([])
  let [songId, setSongId] = useState([])
  let [loader, setloader] = useState(false)
  let [suggestionId, setSuggestionId] = useState([])
  const [searchInput,setSearchInput] = useState("Imagine+Dragons")

  const searchSongs = async  () => {
    setloader(true)
    const songFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/search?query=${searchInput}`);
    setSearch(await songFetch.json())
    setloader(false)
    console.log(songFetch)
    console.log("search result fetched succesfully")
    
    }
    
    const suggestionsLoad = async ()=>{
      const songFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/songs/${id}/suggestions`);
      setSuggestionId(await songFetch.json())
      console.log(suggestionId)
      console.log(id)
      }
 
  const searchIdSongs = async  () => {
    const songIdFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/songs/${id}`);
    setSongId(await songIdFetch.json())
    console.log(songIdFetch)
    console.log("songID result fetched succesfully")
    
    }
    const {data:songsData=""} = songId || {}
    const {downloadUrl=""} = songsData[0] || {}
    const {url:donwloadSongUrl=""} = downloadUrl[4] || []
    console.log(songsData)
    console.log(donwloadSongUrl)


    const {data} = search || {}
    const {songs} = data || {}
    const {results = "results is empty"} = songs || {}
    const {description = "",image="" ,url:jiourl="",id=""} = results[0] || {}
    const {url = "nourl"} = image[1] || {}
  
  


  const inputSearch = ()=>{
    const searchini = document.getElementById("inputsongname").value
    searchini.replace(' ','+')
    setSearchInput(searchini)
    console.log("sfss")
  }
   const callDoubel=()=>{
    suggestionsLoad()
    searchSongs()

   }
    
     
    return (
    <>
    <h1>TeZado Music</h1>
    <h5>v 0.1.12</h5>
    <h6>Last updated on 06-10-24</h6>


       <input id='inputsongname' type="text" onChange={inputSearch} placeholder='Enter Song Name'/>
    
   <br /> <br />
    <button onClick={callDoubel}>search</button> <br /> <br />
    <TailSpin
  visible={loader}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />
    <img src={url} alt="" /> <br />
    <h3>{description}</h3>
    <button onClick={searchIdSongs}>Play</button>
     <br /> <br />
    
<Player songulr={donwloadSongUrl}/>



 <footer>This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</footer>
{/* <button><a href={jiourl} target='blank'>JIOSAVAN</a></button> */} <br />
<a href="https://buymeacoffee.com/tezado" target='blank'><button>Support Us</button></a>
    </>
    
  )
}
