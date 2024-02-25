import profileImage from '../../assets/images/Mohan-muruge.jpg'
import Avater from '../Avater/Avater';
import CommentButton from '../Button/CommentButton';
import './Form.scss';

function CommentForm({ addComment }) {
    function handleSubmit(event) {
        event.preventDefault();

        const form = event.target;
        const commentInput = form.comment;

        if (!commentInput.value) {
            commentInput.classList.add('error');
        } else {
            console.log(commentInput.value);
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