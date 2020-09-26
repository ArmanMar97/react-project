import React from "react";
import {Route} from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collections-overview";
import CollectionPage from "../category/collection.page";
import {connect} from "react-redux";
import WithSpinner from "../../components/withSpinner/withSpinner";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";
import {selectIsCollectionFetching,selectIsCollectionsLoaded} from "../../redux/shop/shop.selectors";
import {createStructuredSelector} from "reselect";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopComponent extends React.Component{

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props
        fetchCollectionsStartAsync()
    }

    render() {
        const {match,isCollectionLoaded} = this.props
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={!isCollectionLoaded} {...props} />}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={!isCollectionLoaded} {...props}/>}/>
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching,
    isCollectionLoaded:selectIsCollectionsLoaded
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopComponent);