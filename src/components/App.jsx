import Search from './Search.js';
import VideoList from './VideoList.js';
import VideoPlayer from './VideoPlayer.js';
import exampleVideoData from '../data/exampleVideoData.js';

const { useState, useEffect } = React;

var App = ({search}) => {

  const [currentVideo, setCurrentVideo] = useState(exampleVideoData[0]);
  const [videos, setVideos] = useState(exampleVideoData);

  const handleClick = function (video) {
    setCurrentVideo(video);
  }

  console.log(search);

  return (
    <div>
      <nav className="navbar">
        <div className="col-md-6 offset-md-3">
          <Search />
        </div>
      </nav>
      <div className="row">
        <div className="col-md-7">
          <VideoPlayer video={currentVideo}/>
        </div>
        <div className="col-md-5">
          <VideoList onClick={handleClick} videos={videos} />
        </div>
      </div>
    </div>
  );
}

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default App;
