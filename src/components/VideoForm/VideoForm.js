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
    const [videoThumbnailUrl, setVideoThumbnailUrl] = useState(`${baseUrl}images/upload-video-thumbnail.jpg`);
    const [imageError, setImageError] = useState('');
    const [titleError, setTitleError] = useState('');
    const [descriptionError, setDescriptionError] = useState('');
    const [isSubmitting, setIsSubmitting] = useState(false);

    function handleUploadChange(event) {
        const file = event.target.files[0];

        if (file) {
            const reader = new FileReader();

            reader.onload = (e) => {
                const imageDataURL = e.target.result;
                setVideoThumbnailUrl(imageDataURL);
            };

            reader.readAsDataURL(file);
        }

        // remove error indicator
        setImageError('');
    }

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const formData = new FormData(form);
        formData.append('channel', 'Mary Channel TV')

        if (form.image.files.length < 1) {
            setImageError('Please upload an image');
        } else if (!form.title.value) {
            setTitleError("Title cannot be empty");
        } else if (!form.description.value) {
            setDescriptionError("Description is required");
        } else {
            try {
                setIsSubmitting(true);
                const headers = { 'Content-Type': 'multipart/form-data' }
                const res = await axios.post(`${baseUrl}videos`, formData, { headers })
                console.log(res.data);
                setUploadStatus('success');

                // Redirect to home after 3 seconds of success
                setTimeout(() => {
                    navigate("/videos/" + res.data.id)
                }, 3000);
            } catch (error) {
                console.error(error);
                setUploadStatus('error')
            } finally {
                setIsSubmitting(false);
            }
        }
    }

    function removeError(event) {
        const elementId = event.target.id;
        if (elementId === 'title' && titleError) {
            setTitleError('');
        } else if (elementId === 'description' && descriptionError) {
            setDescriptionError('');
        } else if (elementId === 'image' && imageError) {
            setImageError('');
        }
    }

    return (
        <div>
            <div aria-live="polite" tabIndex="-2">
                {uplaodStatus === 'success' && <Message message="Video uploaded successfully" type="success" />}
                {uplaodStatus === 'error' && <Message message="Video uploading failed" type="error" />}
            </div>

            <form className='video-form' onSubmit={handleSubmit} aria-describedby="form-instructions">
                <div className='divider not-mobile'></div>
                <p id="form-instructions" className="video-form__instructions">
                    All fields are required. Please provide a thumbnail, title, and description for your video.
                </p>

                <div className="video-form__fields">
                    <div className='video-form__field'>
                        <label htmlFor='image'>VIDEO THUMBNAIL</label>
                        <div className="video-form__poster">
                            <input type='file' name='image' id='image' accept='image/*' onChange={handleUploadChange}
                                aria-required="true"
                                aria-describedby={imageError ? 'image-error' : undefined}
                                className={imageError ? 'error' : ''} />
                            <img className='video-form__image' src={videoThumbnailUrl} alt="Preview of uploaded thumbnail" />
                            <label htmlFor='image' className='video-form__upload' role='button' tabIndex="0">
                                <img src={uploadIcon} alt='Upload' />
                                <div>UPLOAD</div></label>
                        </div>
                        {imageError && (
                            <span id='image-error' className="video-form__error" role="alert">{imageError}</span>
                        )}
                    </div>
                    <div className='video-form__set'>
                        <div className='video-form__field'>
                            <label htmlFor='title'>TITLE YOUR VIDEO</label>
                            <input id='title' type="text" name="title" placeholder="Add a title to your video" onChange={removeError}
                                aria-required="true"
                                aria-describedby={titleError ? 'title-error' : undefined}
                                className={`video-form__text ${titleError ? 'error' : ''}`} />
                            {titleError && (
                                <span id="title-error" className="video-form__error" role="alert">
                                    {titleError}
                                </span>
                            )}
                        </div>
                        <div className='video-form__field video-form__field--glow'>
                            <label htmlFor='description'>ADD A VIDEO DESCRIPTION</label>
                            <textarea id='description' name='description' placeholder="Add a description to your video" onChange={removeError}
                                aria-required="true"
                                aria-describedby={descriptionError ? 'description-error' : undefined}
                                className={`video-form__text video-form__text--glow ${descriptionError ? 'error' : ''}`}
                            ></textarea>
                            {descriptionError && (
                                <span id="description-error" className="form__error" role="alert">
                                    {descriptionError}
                                </span>
                            )}
                        </div>
                    </div>
                </div>
                <div className='divider not-mobile'></div>
                <div className='video-form__actions'>
                    <TextAndIconButton icon={publishIcon} loading={isSubmitting} text={isSubmitting ? "Submitting..." : "PUBLISH"} />
                    <CancelButton />
                </div>
            </form>
        </div>
    )
}

export default VideoForm;