import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { selectLoadingState } from '../../redux/shop/shop.selector.js';
import WithSpinner from '../spinner/spinner.components.jsx';
import CollectionOverview from './collections-overview.component.jsx';

const mapStateToProps = createStructuredSelector({
    isLoading: selectLoadingState
})

const CollectionsOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionsOverviewContainer;