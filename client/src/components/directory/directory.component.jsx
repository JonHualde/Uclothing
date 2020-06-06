import React from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { selectShopItem } from '../../redux/directory/directory.selector.js';

import './directory.styles.scss';
import MenuItem from '../menu-item/menu-item.component.jsx';

const Directory = ({ sections }) => {
    return (
        <>
        <div className='text_title_container'>
            <h2 className='main_title'>U-Clothing </h2>
            <p className='text'>Check out our latest releases</p>
        </div>
        <div className="directory-menu">
            {
                sections.map(({ id, ...otherSectionProps }) => 
                    <MenuItem key={id} {...otherSectionProps} />
                )
            }
        </div>
        </>
    )
}

const mapStateToProps = createStructuredSelector({
    sections: selectShopItem
})

export default connect(mapStateToProps)(Directory);