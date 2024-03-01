import React from 'react';

function Header() {
    return (
        <div>
            <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src="https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/7b/aa/1c/7baa1c35-6c3b-6d5d-ef57-cb71d67f9593/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/256x256bb.jpg" alt="Logo"
                         width="50" height="34"
                         className="d-inline-block align-text-top"/>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="/home/wellcome">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/characters">Characters</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/add-character">Create Character</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}

export default Header;