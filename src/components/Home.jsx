import {useState} from 'react'
import 'react-h5-audio-player/lib/styles.css';
import '../App.css'
import '../AppS.sass'
import { Audio } from 'react-loader-spinner'
import Player from './Player';



export default function Home() {
  let [search, setSearch] = useState([])
  let [songId, setSongId] = useState([])
  let [playerImg,setPlayerImg]= useState()
  let [playerName,setPlayerName]= useState()

  let [playerUrl, setPlayerUrl] = useState([])
  let [loader, setloader] = useState(false)
  let [suggestionId, setSuggestionId] = useState([])
  let [searchInput,setSearchInput] = useState("Imagine+Dragons")
  
  
  


    let searchSongs = async  () => {
      setloader(true)
      setPlayerImg(imgUrl)
      setPlayerName(title)
      const songFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/search?query=${searchInput}`);
      setSearch(await songFetch.json())
      setloader(false)
      document.getElementById("sugSection").style.display = "none";
      document.getElementById("sugSection1").style.display = "none";
      document.getElementById("searchId").style.display = "inline-block";
      document.getElementById("searchId1").style.display = "block";
      }
    
    let searchIdSongs = async  () => {
      const songIdFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/songs/${id}`);
      setSongId(await songIdFetch.json())
      const suggestionFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/songs/${id}/suggestions`);
      setSuggestionId(await suggestionFetch.json())
      setPlayerUrl( donwloadSongUrl) 
      
      }
  
      
      
      const inputSearch = ()=>{
        const searchini = document.getElementById("query").value
        searchini.replace(' ','+')
         setSearchInput(searchini)
    
    }
    
    
    
    
    
    
   //destructuring
     let {data:songsData=""} = songId || {}
     let {downloadUrl=""} = songsData[0] || {}
     let {url:donwloadSongUrl=""} = downloadUrl[4] || []
   
     
   
   
     let {data} = search || {}
     let {songs} = data || {}
     let {results = "results is empty"} = songs || {}
     let {description = "",image={},id="",title} = results[0] || {}
     let {url:imgUrl = ""} = image[2] || {}
   
     
    
   
   
     //suggestion destrcuture
     let {data:suggData=[]} = suggestionId || {}
     
    return (
    <>


<h1>TeZado Music</h1>
    <h5>v 2.0</h5>
    <h6>Last updated on 13-06-24</h6>


    <div className="group">
  <svg viewBox="0 0 24 24" aria-hidden="true" className="search-icon">
    <g>
      <path
        d="M21.53 20.47l-3.66-3.66C19.195 15.24 20 13.214 20 11c0-4.97-4.03-9-9-9s-9 4.03-9 9 4.03 9 9 9c2.215 0 4.24-.804 5.808-2.13l3.66 3.66c.147.146.34.22.53.22s.385-.073.53-.22c.295-.293.295-.767.002-1.06zM3.5 11c0-4.135 3.365-7.5 7.5-7.5s7.5 3.365 7.5 7.5-3.365 7.5-7.5 7.5-7.5-3.365-7.5-7.5z"
      ></path>
    </g>
  </svg>

  <input
    id="query"
    className="input"
    type="search"
    placeholder="Enter Song Name"
    name="searchbar"
    onChange={inputSearch}
  />
</div>
      
    
  
    <button   onClick={searchSongs}>Search</button> <br /> <br />
    <div className='loaderr1'>
    <Audio 
  visible={loader}
  height="80"
  width="80"
  color="#4fa94d"
  ariaLabel="tail-spin-loading"
  radius="1"
  wrapperStyle={{}}
  wrapperClass=""
  />

    </div>
    <div className='playerOutline'>
   <img id='sugSection' src={playerImg} alt="" /> <br />
    <img id='searchId' src={imgUrl} alt="" /> <br />
    <span id='sugSection1'>{playerName}</span> 
    <span id='searchId1'>{title}</span> 
    <button className='btnLoad' onClick={searchIdSongs}>Load Track</button>
    <button className='btnLoad' onClick={searchIdSongs}>Play</button>
     <br /> <br />
    </div>
 
    
<Player songulr={playerUrl}/>



  <h3>Suggestions</h3>
<div>
        {suggData.map(({id, name, type, year, releaseDate, duration, label, explicitContent, playCount, language, hasLyrics, lyricsId, url, copyright, album, artists, image, downloadUrl}) => (
       
 <button key={id} className='suggSection'  ><img  className='sugImg' src={image[2].url} onClick={()=>{setPlayerName(name),setPlayerImg(image[2].url), setPlayerUrl(downloadUrl[4].url), document.getElementById("sugSection").style.display = "inline-block";
  document.getElementById("sugSection1").style.display = "block";document.getElementById("searchId").style.display = "none";
  document.getElementById("searchId1").style.display = "none";}
  }  alt=""  /><br></br> {name.slice(0, 15)}</button>

      
        ))}
      </div>



 <footer>This site does not store any files on our server, we only linked to the media which is hosted on 3rd party services.</footer>
{/* <button><a href={jiourl} target='blank'>JIOSAVAN</a></button> */} <br />
<a href="https://buymeacoffee.com/tezado" target='blank'><button>Support Us</button></a>
<div className='Foootor'></div>

   
    </>
    
  )
}
