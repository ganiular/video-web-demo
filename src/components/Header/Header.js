import logo from '../../assets/logo/BrainFlix-logo.svg';
import profileImage from '../../assets/images/Mohan-muruge.jpg';
import searchIcon from '../../assets/icons/search.svg';
import UplaodButton from '../Button/UploadButton';
import './Header.scss';
import Avater from '../Avater/Avater';

function Header() {
    return (
        <div className='header'>
            <a href="/"><img className='header__logo' src={logo} alt='BrainFlix logo' /></a>
            <div className='header__nav'>
                <div className="header__search-field"><img src={searchIcon} alt='Search icon' /><input className='header__search-bar' type='search' placeholder='Search' /></div>
                <UplaodButton />
                <Avater image={profileImage} />
            </div>
        </div>
    )
}

export default Header;