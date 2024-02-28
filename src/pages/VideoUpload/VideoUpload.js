import VideoForm from '../../components/VideoForm/VideoForm';
import './VideoUpload.scss';

function VideoUploadPage() {
    return (
        <main>
            <div className='divider'></div>
            <section className='upload-section'>
                <h1 className='upload-section__header'>Upload Video</h1>
                <div className='divider not-mobile'></div>
                <VideoForm />
            </section>
        </main>
    )
}

export default VideoUploadPage;