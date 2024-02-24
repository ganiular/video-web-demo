import uploadIcon from '../../assets/icons/upload.svg';
import './Button.scss';

function UplaodButton(props) {
    return (
        <button className='primary-button'>
            <img src={uploadIcon} alt='upload icon' />
            <div>UPLOAD</div>
        </button>
    )
}

export default UplaodButton;