import React from 'react';
import CollectionItem from '../../components/collection-item/collection-item.component.jsx';

import { connect } from 'react-redux';
import { selectCollection } from '../../redux/shop/shop.selector.js';

import './collection.styles.scss';

const CollectionPage = ({ collection, ...otherProps }) => {
    const { title, items } = collection;
    return (
    <div className='collection-page'>
        <h2 className='title'> {title} Collection </h2> 
        <div className='items'>
            { items.map( item => 
                <CollectionItem item={item} key={item.id} /> )}
        </div>
    </div>
)}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage);

