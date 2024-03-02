import profileImage from '../../assets/images/Mohan-muruge.jpg'
import Avater from '../Avater/Avater';
import CommentButton from '../Button/CommentButton';
import './Form.scss';

function CommentForm({ postComment }) {
    async function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const data = {
            name: '',
            comment: form.comment.value
        }

        if (!data.comment) {
            form.comment.classList.add('error');
        } else {
            await postComment(data);
            form.reset();
        }
    }

    function removeError(event) {
        event.target.classList.remove('error');
    }

    return (
        <form className="form" action="" method="post" onSubmit={handleSubmit}>
            <label className='form__header'>JOIN THE CONVERSATION</label>
            <div className="form__body">
                <Avater image={profileImage} />
                <div className='form__fields'>
                    <textarea name='comment' placeholder='Add a new comment' onChange={removeError} />
                    <CommentButton />
                </div>
            </div>
        </form>
    )
}

export default CommentForm;