import React from 'react'

import './footer.scss'

const Footer = () => {
    return (
        <div className='footer_container'>
            <div className='upper_part'>
                <div className='upper_text'>
                    <a href='/contact'>Contact</a>
                    {/* <p>|</p> */}
                    {/* <a href='https://jonhualde.github.io/' target='_blank'>Website of the owner</a> */}
                    <p>|</p>
                    <a href='/' target='_blank' rel="noopener noreferrer">Legal notice</a>
                    <p>|</p>
                    <a href='/' target='_blank' rel="noopener noreferrer">Latest clothin trends</a>
                </div>
            </div>
            <div className='lower_part'>
                <div className='lower_text'>
                    <p>Made by me with passion & React.JS </p>
                    {/* <p>Made by <a href='https://github.com/JonHualde' target='_blank'>Jon Hualde</a> with passion & React.JS </p> */}
                </div>
            </div>
        </div>
    )
}

export default Footer;