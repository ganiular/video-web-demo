import profileImage from '../../assets/images/Mohan-muruge.jpg'
import Avater from '../Avater/Avater';
import CommentButton from '../Button/CommentButton';
import './Form.scss';

function CommentForm() {
    return (
        <form className="form" action="" method="post">
            <label className='form__header'>JOIN THE CONVERSATION</label>
            <div className="form__body">
                <Avater image={profileImage} />
                <div className='form__fields'>
                    <textarea name='comment' placeholder='Add a new comment' />
                    <CommentButton />
                </div>
            </div>
        </form>
    )
}

export default CommentForm;