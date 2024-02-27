import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import HomePage from './pages/Home/Home';
import VideoUploadPage from './pages/VideoUpload/VideoUpload';


function App() {

  return (
    <BrowserRouter className="App">
      <Header />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/videos/:videoId' element={<HomePage />} />
        <Route path='/upload-video' element={<VideoUploadPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
