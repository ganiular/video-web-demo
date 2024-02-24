import commentIcon from '../../assets/icons/add_comment.svg';
import './Button.scss';

function CommentButton(props) {
    return (
        <button className='primary-button'>
            <img src={commentIcon} alt='upload icon' />
            <div>COMMENT</div>
        </button>
    )
}

export default CommentButton;