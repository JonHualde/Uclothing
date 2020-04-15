import React from 'react';
import './custom-button.styles.scss';

const CustomButton = ({ 
    children, 
    color, 
    inverted,
    ...otherProps }) => (
        
    <button className={` ${ inverted ? 'inverted' : ''}    
    ${color ? [color] : ''}   custom-button `} {...otherProps} >
        {children}
    </button>
)

export default CustomButton;