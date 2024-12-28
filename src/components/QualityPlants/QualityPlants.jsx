import React from 'react';
import './styles/quality.css';
import ReactPlayer from 'react-player';

const QualityPlants = () => {
  return (
    <div className='blockQualityPlants'>
        <div className='videoPlants'>
<ReactPlayer
light
playing
url="https://www.youtube.com/watch?v=A39ATKA7Pfw" width="100%" height="100%"></ReactPlayer>
        </div>
    </div>
  )
}

export default QualityPlants;