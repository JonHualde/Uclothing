import React from 'react'

import './footer.scss'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='upper_part'>
                <div className='upper_text'>
                    <a href='/' target='_blank'>Contact</a>
                    <p>|</p>
                    <a href='https://jonhualde.github.io/' target='_blank'>Website of the owner</a>
                    <p>|</p>
                    <a href='/' target='_blank'>Legal notice</a>
                    <p>|</p>
                    <a href='/' target='_blank'>Latest clothin trends</a>
                </div>
            </div>
            <div className='lower_part'>
                <div className='lower_text'>
                    <p>Made by <a href='https://github.com/JonHualde' target='_blank'>Jon Hualde</a> with passion & React.JS </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;