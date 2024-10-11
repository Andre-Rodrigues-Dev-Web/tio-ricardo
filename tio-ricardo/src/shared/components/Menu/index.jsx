import { useState, useRef } from 'react';
import { ContainerMenu } from './style';

import Links from './Links';
import { Link } from 'react-router-dom';

import logoTioRicardo from '../../assets/imgs/logo.png';

const Menu = () => {
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const containerLinksRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuVisible(!isMenuVisible);
        if (containerLinksRef.current && !isMenuVisible) {
            containerLinksRef.current.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <ContainerMenu>
            <div className="content-menu">
                <div className="logo">
                    <Link>
                        <img src={logoTioRicardo} alt="Logo Tio Ricardo" srcSet={logoTioRicardo} />
                    </Link>
                </div>
                <div className="button-responsive">
                    <button onClick={toggleMenu}>
                        <div></div>
                    </button>
                </div>
                <div
                    ref={containerLinksRef}
                    className={`container-links ${isMenuVisible ? 'show' : ''}`}
                >
                    <Links />
                </div>
            </div>
        </ContainerMenu>
    );
}

export default Menu;
