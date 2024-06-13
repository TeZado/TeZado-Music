import { Component } from 'react'
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import '../App.css'
import '../AppS.sass'



export default class Player extends Component {
  render() {
    let{songulr}=this.props;
    return (
      <>
     
        <AudioPlayer className='playerr' loop showDownloadProgress autoPlay src={songulr} />
   
       
      </>
    )
  }
}
