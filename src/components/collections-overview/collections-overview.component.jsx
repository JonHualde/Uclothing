import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { selectCollectionForPreview } from '../../redux/shop/shop.selector.js';

import CollectionPreview from '../collection-preview/collection-preview.component.jsx';
import './collections-overview.styles.scss';

const CollectionsOverview = ({ collections }) => {
        console.log('collection', collections)
    return (
    <div className='collections-overview'>
        { collections.map(({ id, ...otherCollectionsProps}) => (
            <CollectionPreview key={id} {...otherCollectionsProps} />
        ))}
    </div>
)}

const mapStateToProps = createStructuredSelector({
    collections: selectCollectionForPreview
})

export default connect(mapStateToProps)(CollectionsOverview);