import React, { Component } from 'react';
import { Route } from "react-router-dom";

import { connect } from 'react-redux';
import { updateCollections } from '../../redux/shop/shop.actions.js';

import CollectionPage from '../collection/collection.component.jsx';
import CollectionOverview from '../../components/collections-overview/collections-overview.component.jsx';
import WithSpinner from '../../components/spinner/spinner.components.jsx';

import { firestore } from '../../firebase/firebase.utils.js';
import { convertCollectionSnapshotToMap } from '../../firebase/firebase.utils.js';

const CollectionsOverviewWithSpinner = WithSpinner(CollectionOverview);
const CollectionsPageWithSpinner = WithSpinner(CollectionPage);

class ShopPage extends Component {
    state = {
        loading: true
    };
    
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const { updateCollections } = this.props;
        const collectionRef = firestore.collection('collections');
        
        collectionRef.get().then((snapshot => {
            const CollectionsMap = convertCollectionSnapshotToMap(snapshot);
                updateCollections(CollectionsMap)
                this.setState({ loading: false })
        }))
    }

    render() {
    const { match } = this.props;
    const { loading } = this.state;

    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} render={ (props) => 
                <CollectionsOverviewWithSpinner isLoading={loading} {...props}/>} />
            <Route path={`${match.path}/:collectionId`} render={(props) => 
                <CollectionsPageWithSpinner isLoading={loading} {...props} />} />
        </div>
        )
    }
}

const mapDispatchToPros = dispatch => ({
    updateCollections: collectionsMap => 
        dispatch(updateCollections(collectionsMap))
})

export default connect(null, mapDispatchToPros)(ShopPage);