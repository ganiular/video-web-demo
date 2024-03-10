import { useState } from 'react';
import publishIcon from '../../assets/icons/publish.svg';
import TextAndIconButton from "../../components/Button/TextAndIconButton";
import CancelButton from '../Button/CancelButton';
import Message from '../Message/Message';
import './VideoForm.scss';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import uploadIcon from '../../assets/icons/upload.svg';

function VideoForm() {
    const navigate = useNavigate()
    const [uplaodStatus, setUploadStatus] = useState('');
    const baseUrl = process.env.REACT_APP_BASE_URL;
    const videoThumbnailUrl = `${baseUrl}images/upload-video-thumbnail.jpg`

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        formData.append('channel', 'Mary Channel TV')

        if (form.image.files.length < 1) {
            form.image.classList.add('error');
        } else if (!form.title.value) {
            form.title.classList.add('error');
        } else if (!form.description.value) {
            form.description.classList.add('error');
        } else {
            try {
                const headers = { 'Content-Type': 'multipart/form-data' }
                const res = await axios.post(`${baseUrl}videos`, formData, { headers })
                console.log(res.data);
                setUploadStatus('success');

                // Redirect to home after 3 seconds of success
                setTimeout(() => {
                    navigate("/")
                }, 3000);
            } catch (error) {
                console.error(error);
                setUploadStatus('error')
            }
        }
    }

    function removeError(event) {
        event.target.classList.remove('error');
    }

    return (
        <div>
            {uplaodStatus === 'success' && <Message message="Video uploaded successfully" type="success" />}
            {uplaodStatus === 'error' && <Message message="Video uploading failed" type="error" />}

            <form className='video-form' onSubmit={handleSubmit}>
                <div className='divider not-mobile'></div>
                <div className="video-form__fields">
                    <div className='video-form__field'>
                        <label htmlFor='image'>VIDEO THUMBNAIL</label>
                        <div className="video-form__poster">
                            <img className='video-form__image' src={videoThumbnailUrl} alt="Video thumbnail" />
                            <label htmlFor='image' className='video-form__upload'>
                                <img src={uploadIcon} alt='Upload' />
                                <div>UPLOAD</div></label>
                            <input type='file' name='image' id='image' accept='image/*' />
                        </div>
                    </div>
                    <div className='video-form__set'>
                        <div className='video-form__field'>
                            <label>TITLE YOUR VIDEO</label>
                            <input className='video-form__text' type="text" name="title" placeholder="Add a title to your video" onChange={removeError} />
                        </div>
                        <div className='video-form__field video-form__field--glow'>
                            <label>ADD A VIDEO DESCRIPTION</label>
                            <textarea name='description' className='video-form__text video-form__text--glow' placeholder="Add a description to your video" onChange={removeError}></textarea>
                        </div>
                    </div>
                </div>
                <div className='divider not-mobile'></div>
                <div className='video-form__actions'>
                    <TextAndIconButton icon={publishIcon} text="PUBLISH" />
                    <CancelButton />
                </div>
            </form>
        </div>
    )
}

export default VideoForm;