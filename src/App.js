import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';

import videoDetails from './data/video-details.json';
import videos from './data/videos.json';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoComments from './components/VideoComments/VideoComments';

function App() {
  const [videoDetail, setVideoDetail] = useState(videoDetails[0]);

  return (
    <div className="App">
      <Header />
      <Video data={videoDetail} />
      <article>
        <VideoDetail data={videoDetail} />
        <VideoComments comments={videoDetail.comments} />
      </article>
    </div>
  );
}

export default App;
