import {useEffect, useState} from 'react'
import 'react-h5-audio-player/lib/styles.css';
import '../App.css'
import '../AppS.sass'
import { TailSpin } from 'react-loader-spinner'
import Player from './Player';



export default function Home() {
  let [search, setSearch] = useState([])
  let [songId, setSongId] = useState([])
  let [playerImg,setPlayerImg]= useState()
  let [playerName,setPlayerName]= useState()

  let [playerUrl, setPlayerUrl] = useState()
  let [loader, setloader] = useState(false)
  let [suggestionId, setSuggestionId] = useState([])
  let [searchInput,setSearchInput] = useState("Imagine+Dragons")

//destructuring
  let {data:songsData=""} = songId || {}
  let {downloadUrl=""} = songsData[0] || {}
  let {url:donwloadSongUrl=""} = downloadUrl[4] || []
  console.log(songsData)
  console.log(donwloadSongUrl)
  


  let {data} = search || {}
  let {songs} = data || {}
  let {results = "results is empty"} = songs || {}
  let {description = "",image="" ,url:jiourl="",id="",title} = results[0] || {}
  let {url:imgUrl = "nourl"} = image[1] || {}


  //suggestion destrcuture
  let {data:suggData=[]} = suggestionId || {}
 let {name="",image:sugImage=""} = suggData[0] || {}
 let {url:sugImg = "nourl"} = sugImage[1] || {}
 let {downloadUrl:dwnUrlSgg=""} = suggData[0] || {}
 let {url:suggSongUrl}= dwnUrlSgg[4] || {}

 



  let searchSongs = async  () => {
    setloader(true)
    const songFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/search?query=${searchInput}`);
    setSearch(await songFetch.json())
    setPlayerImg(imgUrl)
    setPlayerName(title)
    setloader(false)
    console.log(songFetch)
    console.log("search result fetched succesfully")
    
    }
    
    let searchIdSongs = async  () => {
      setPlayerUrl(donwloadSongUrl)
      const songIdFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/songs/${id}`);
      setSongId(await songIdFetch.json())
      const suggestionFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/songs/${id}/suggestions`);
      setSuggestionId(await suggestionFetch.json())
      console.log(suggestionId)
      console.log(songIdFetch)
      console.log("songID result fetched succesfully")
    
    }
   
    

  const inputSearch = ()=>{
    const searchini = document.getElementById("inputsongname").value
    searchini.replace(' ','+')
    setSearchInput(searchini)
    console.log("sfss")
  }

 

   
    
     
    return (
    <>
    <h1>TeZado Music</h1>
    <h5>v 0.1.12</h5>
    <h6>Last updated on 06-10-24</h6>


       <input id='inputsongname' type="text" onChange={inputSearch} placeholder='Enter Song Name'/>
    
   <br /> <br />
    <button  onClick={searchSongs}>search</button> <br /> <br />
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
    <img src={playerImg} alt="" /> <br />
    <h3>{playerName}</h3>
    <button onClick={searchIdSongs}>Play</button>
     <br /> <br />
    
<Player songulr={playerUrl}/>


  <h3>Suggestions</h3>
<div>
        {suggData.map(({id, name, type, year, releaseDate, duration, label, explicitContent, playCount, language, hasLyrics, lyricsId, url, copyright, album, artists, image, downloadUrl}) => (
       
 <button key={id} className='suggSection'  onClick={()=> setPlayerUrl(downloadUrl[4].url)}><img src={image[1].url} alt="" onClick={()=>{setPlayerName(name),setPlayerImg(image[1].url)}} /><br></br> {name.slice(0, 15)}</button>

      
        ))}
      </div>



 <footer>This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</footer>
{/* <button><a href={jiourl} target='blank'>JIOSAVAN</a></button> */} <br />
<a href="https://buymeacoffee.com/tezado" target='blank'><button>Support Us</button></a>
    </>
    
  )
}
