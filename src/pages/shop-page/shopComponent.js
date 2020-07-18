import React from "react";
import {Route} from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collections-overview";
import CollectionPage from "../category/collection.page";
import {connect} from "react-redux";
import WithSpinner from "../../components/withSpinner/withSpinner";
import {fetchCollectionsStartAsync} from "../../redux/shop/shop.actions";
import {selectCollection, selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import {createStructuredSelector} from "reselect";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopComponent extends React.Component{

    componentDidMount() {
        const {fetchCollectionsStartAsync} = this.props
        fetchCollectionsStartAsync()
    }

    render() {
        const {match} = this.props
        const {isFetching} = this.props
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={isFetching} {...props} />}/>
                <Route path={`${match.path}/:collectionId`} render={(props) => <CollectionPageWithSpinner isLoading={isFetching} {...props}/>}/>
            </div>
        )
    }

}

const mapStateToProps = createStructuredSelector({
    isFetching: selectIsCollectionFetching,
})

const mapDispatchToProps = (dispatch) => ({
    fetchCollectionsStartAsync: () => dispatch(fetchCollectionsStartAsync())
})

export default connect(mapStateToProps,mapDispatchToProps)(ShopComponent);