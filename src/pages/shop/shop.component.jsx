import React, { Component } from 'react';
import { Route } from "react-router-dom";

import { connect } from 'react-redux';
import { fetchCollectionsStartAsync } from '../../redux/shop/shop.actions.js';

import CollectionsOverviewContainer from '../../components/collections-overview/collection-overview-container.jsx';
import CollectionPageContainer from '../../pages/collection/collection.container.jsx';


class ShopPage extends Component {

    componentDidMount() {
        const { fetchCollectionsStartAsync } = this.props;
        fetchCollectionsStartAsync()
    }

    render() {
    const { match } = this.props;

    return(
        <div className='shop-page'>
            <Route exact path={`${match.path}`} component={CollectionsOverviewContainer} />
            <Route path={`${match.path}/:collectionId`} component={CollectionPageContainer} />
        </div>
        )
    }
}


const mapDispatchToPros = dispatch => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(null, mapDispatchToPros)(ShopPage);