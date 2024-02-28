import VideoForm from '../../components/VideoForm/VideoForm';
import './VideoUpload.scss';

function VideoUploadPage() {
    return (
        <main className='upload-page'>
            <section className='upload-section'>
                <h1 className='upload-section__header'>Upload Video</h1>
                <VideoForm />
            </section>
        </main>
    )
}

export default VideoUploadPage;