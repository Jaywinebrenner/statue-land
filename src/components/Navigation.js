import React from 'react';
import { isFrontPage, isPage, homeUrl } from '../utils/pageDeterminer'; // You need to create this helper file

function Navigation() {
    return (
        <section className="navigation">
            <div className="navigation__top container">
                <div className="home">
                    <a style={{ pointerEvents: isFrontPage() ? 'none' : 'auto' }} href="/" className="img-link-wrapper">
                        <img src={`/dem.png`} alt="Home" />
                    </a>
                    {!isFrontPage() && (
                        <div className="tool"><p>HOME</p></div>
                    )}
                </div>

                <div className="about">
                    <a style={{ pointerEvents: isPage('about') ? 'none' : 'auto' }} href={`/about`} className="img-link-wrapper">
                        <img src={`/david.png`} alt="About" />
                        {!isPage('about') && (
                            <div className="tool"><p>ABOUT</p></div>
                        )}
                    </a>
                </div>

                <div className="work">
                    <a style={{ pointerEvents: isPage('work') ? 'none' : 'auto' }} href={`/work`} className="img-link-wrapper">
                        <img src={"/pos.jpg"} alt="Work" />
                        {!isPage('work') && (
                            <div className="tool"><p>WORK</p></div>
                        )}
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Navigation;
