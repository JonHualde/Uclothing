import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { compose } from 'redux';

import { SelectionCollectionsLoaded } from '../../redux/shop/shop.selector.js';
import WithSpinner from '../../components/spinner/spinner.components.jsx';
import CollectionPage from './collection.component.jsx';

const mapStateToProps = createStructuredSelector({
    isLoading: state => !SelectionCollectionsLoaded(state)
})

const CollectionPageContainer = compose(
    connect(mapStateToProps), WithSpinner)
(CollectionPage);

export default CollectionPageContainer;