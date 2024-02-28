import publishIcon from '../../assets/icons/publish.svg';
import videoThumbnail from '../../assets/images/Upload-video-preview.jpg';
import TextAndIconButton from "../../components/Button/TextAndIconButton";
import CancelButton from '../Button/CancelButton';
import './VideoForm.scss';

function VideoForm() {
    return (
        <form className='video-form'>
            <div className='video-form__field'>
                <label>VIDEO THUMBNAIL</label>
                <input className='video-form__image' type="image" name="video-thumbnail" src={videoThumbnail} alt="Video thumbnail" />
            </div>
            <div className='video-form__set'>
                <div className='video-form__field'>
                    <label>TITLE YOUR VIDEO</label>
                    <input className='video-form__text' type="text" name="title" placeholder="Add a title to your video" />
                </div>
                <div className='video-form__field'>
                    <label>ADD A VIDEO DESCRIPTION</label>
                    <textarea className='video-form__text' placeholder="Add a description to your video"></textarea>
                </div>
            </div>
            <div className='video-form__actions'>
                <TextAndIconButton icon={publishIcon} text="PUBLISH" />
                <CancelButton />
            </div>
        </form>
    )
}

export default VideoForm;