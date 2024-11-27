import { Link } from 'react-router-dom';

import logo from '../../assets/logo/BrainFlix-logo.svg';
import profileImage from '../../assets/images/Mohan-muruge.jpg';
import searchIcon from '../../assets/icons/search.svg';
import UplaodButton from '../Button/UploadButton';
import './Header.scss';
import Avater from '../Avater/Avater';

function Header() {
    return (
        <header className='header'>
            <Link to="/"><img className='header__logo' src={logo} alt='BrainFlix logo' /></Link>
            <nav className='header__nav'>
                <form className="header__search-form header__search-field" role="search" aria-label="Site search">
                    <img src={searchIcon} alt="Search icon" />
                    <input
                        id="search-bar"
                        className="header__search-bar"
                        type="search"
                        placeholder="Search"
                        aria-label="Search videos"
                    />
                </form>
                <UplaodButton />
                <Avater image={profileImage} />
            </nav>
        </header>
    )
}

export default Header;