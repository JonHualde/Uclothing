import React from 'react';
import data from './shipping&returnText.js'
import './legalNotice.scss'

const LegalNoticePage = () => {
    return (
        <div>
            <div className='text'>
                <h1 className='text-title'>
                    Shipping and Returns
                </h1>
                <div>
                    <h3>{data.titleOne}</h3>
                    <p>{data.textOne}</p>
                </div>
                <div>
                    <h3>{data.titleTwo}</h3>
                    <p>{data.textTwo}</p>
                </div>
                <div>
                    <h3>{data.titleThree}</h3>
                    <p>{data.textThree}</p>
                </div>
                <p>{data.openHours}</p>
            </div>
        </div>
    );
};

export default LegalNoticePage;