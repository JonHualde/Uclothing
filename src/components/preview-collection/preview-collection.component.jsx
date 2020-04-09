import React from 'react';
import './collection-preview.styles.scss';

const PreviewCollection = ({ title, items }) => (
    <div className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            { items
                .filter((item, idx) => idx < 4)
                .map((item) => (
                    <div key={item.id}>{item.name} 
                        <img alt='hats' src={item.imageUrl} /> 
                    </div>
                ))}
        </div>
    </div>
)

export default PreviewCollection;