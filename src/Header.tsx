import React from 'react';

function Header() {
    return (
        <div>
            <header>
                <h1>Star Wars Character Gallery</h1>
                <nav>
                    <ul>
                        <li><a href="/home/wellcome">Home</a></li>
                        <li><a href="/characters">Characters</a></li>
                    </ul>
                </nav>
            </header>
        </div>
    );
}

export default Header;