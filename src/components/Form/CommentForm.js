import { useState } from 'react';
import profileImage from '../../assets/images/Mohan-muruge.jpg'
import Avater from '../Avater/Avater';
import CommentButton from '../Button/CommentButton';
import './Form.scss';

function CommentForm({ postComment }) {
    const [error, setError] = useState('');

    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const data = {
            name: 'Mary Oje',
            comment: form.comment.value.trim()
        }

        if (!data.comment) {
            setError('Comment cannot be empty.');
            form.comment.focus();
        } else {
            try {
                await postComment(data);
                form.reset();
                setError(''); // Clear error after successful submission
            } catch (err) {
                console.error('Error posting comment:', err);
                setError('Failed to post comment. Please try again.');
            }
        }
    }

    function removeError(event) {
        if (error)
            setError('');
    }

    return (
        <form className="form" action="" method="post" onSubmit={handleSubmit}>
            <label className='form__header' htmlFor='comment'>JOIN THE CONVERSATION</label>
            <div className="form__body">
                <Avater image={profileImage} />
                <div className='form__fields'>
                    <div class="form__field">
                        <textarea name='comment' placeholder='Add a new comment' onChange={removeError} id='comment'
                            aria-required="true"
                            aria-describedby={error ? 'comment-error' : undefined}
                            className={error ? 'error' : ''} />
                        {error && (
                            <span id="comment-error" className="form__error" role="alert">
                                {error}
                            </span>
                        )}
                    </div>
                    <CommentButton />
                </div>
            </div>
        </form>
    )
}

export default CommentForm;