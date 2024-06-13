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
      document.getElementById("searchId1").style.display = "inline-block";
      }
    
    let searchIdSongs = async  () => {
      const songIdFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/songs/${id}`);
      setSongId(await songIdFetch.json())
      const suggestionFetch = await fetch(`${import.meta.env.VITE_JIO_SAVAN}/songs/${id}/suggestions`);
      setSuggestionId(await suggestionFetch.json())
      setPlayerUrl( donwloadSongUrl) 
      
      }
  
      
      
      const inputSearch = ()=>{
        const searchini = document.getElementById("inputsongname").value
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
     let {url:imgUrl = ""} = image[1] || {}
   
     
    
   
   
     //suggestion destrcuture
     let {data:suggData=[]} = suggestionId || {}
     
    return (
    <>


<h1>TeZado Music</h1>
    <h5>v 0.1.20</h5>
    <h6>Last updated on 13-06-24</h6>
    <span className='warrning'>Version:</span> <span className='warrinfo' >Stable</span> <br /> <br />


       <input id='inputsongname' type="text" onChange={inputSearch} placeholder='Enter Song Name'/>
    
   <br /> <br />
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
    <img id='sugSection' src={playerImg} alt="" /> <br />
    <img id='searchId' src={imgUrl} alt="" /> <br />
    <h3 id='sugSection1'>{playerName}</h3> <br />
    <h3 id='searchId1'>{title}</h3> <br />
    <button onClick={searchIdSongs}>Load Track</button>
    <button onClick={searchIdSongs}>Play</button>
     <br /> <br />
    
<Player songulr={playerUrl}/>



  <h3>Suggestions</h3>
<div>
        {suggData.map(({id, name, type, year, releaseDate, duration, label, explicitContent, playCount, language, hasLyrics, lyricsId, url, copyright, album, artists, image, downloadUrl}) => (
       
 <button key={id} className='suggSection'  ><img  className='sugImg' src={image[1].url} onClick={()=>{setPlayerName(name),setPlayerImg(image[1].url), setPlayerUrl(downloadUrl[4].url), document.getElementById("sugSection").style.display = "inline-block";
  document.getElementById("sugSection1").style.display = "inline-block";document.getElementById("searchId").style.display = "none";
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
