import { Link } from 'react-router-dom';

import uploadIcon from '../../assets/icons/upload.svg';
import './Button.scss';

function UplaodButton(props) {
    return (
        <Link to='/upload-video' className='primary-button'>
            <img src={uploadIcon} alt='upload icon' />
            <div>UPLOAD</div>
        </Link>
    )
}

export default UplaodButton;