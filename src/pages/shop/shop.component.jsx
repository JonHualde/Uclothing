import React, { Component } from 'react';
import { Route } from "react-router-dom";

import CollectionPage from '../collection/collection.component.jsx';
import CollectionOverview from '../../components/collections-overview/collections-overview.component.jsx';

import { firestore } from '../../firebase/firebase.utils.js';
import { convertCollectionSnapshotToMap } from '../../firebase/firebase.utils.js';

class ShopPage extends Component {
    
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const collectionRef = firestore.collection('collections');

        collectionRef.onSnapshot( async snapshot => {
            if(snapshot) {
                convertCollectionSnapshotToMap(snapshot)
            }
        })
    }

    componentWillUnmount() {

    }

    render() {
    const { match } = this.props;
    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionOverview} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPage} />
        </div>
        )
    }
}

export default ShopPage;