import { useState } from 'react';
import './App.scss';
import Header from './components/Header/Header';
import Video from './components/Video/Video';

import videoDetails from './data/video-details.json';
import videos from './data/videos.json';
import VideoDetail from './components/VideoDetail/VideoDetail';
import VideoComments from './components/VideoComments/VideoComments';
import VideoList from './components/VideoList/VideoList';

function App() {
  const [currentSelectedVideo, setCurrentSelectedVideo] = useState(videoDetails[0].id);

  const selectedVideoData = videoDetails.find(video => {
    return video.id === currentSelectedVideo;
  });

  const nextVideos = videos.filter(video => {
    return video.id !== currentSelectedVideo;
  })

  // const updateSelectedVideo = (id) => {
  //   setCurrentSelectedVideo(id);
  // }

  return (
    <div className="App">
      <Header />
      <Video data={selectedVideoData} />
      <main>
        <article>
          <VideoDetail data={selectedVideoData} />
          <VideoComments comments={selectedVideoData.comments} />
        </article>
        <aside>
          <VideoList videos={nextVideos} setCurrentSelectedVideo={setCurrentSelectedVideo} />
        </aside>
      </main>
    </div>
  );
}

export default App;
