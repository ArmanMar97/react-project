import React from "react";
import {Route} from "react-router-dom";
import CollectionOverview from "../../components/collection-overview/collections-overview";
import CollectionPage from "../category/collection.page";
import {firestore,convertCollectionsSnapshotToMap} from "../../firebase/firebase.utils";
import {connect} from "react-redux";
import {updateCollections} from "../../redux/shop/shop.actions";
import WithSpinner from "../../components/withSpinner/withSpinner";

const CollectionOverviewWithSpinner = WithSpinner(CollectionOverview)
const CollectionPageWithSpinner = WithSpinner(CollectionPage)

class ShopComponent extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            loading:true
        }
    }
    unsubscribeFromSnapshot = null;

    componentDidMount() {
        const {updateCollections} = this.props
        const collectionRef = firestore.collection("collections")
        collectionRef.get().then(
            snapshot => {
                const collectionMap = convertCollectionsSnapshotToMap(snapshot)
                updateCollections(collectionMap)
                this.setState({loading: false})
            })
    }
    render() {
        const {match} = this.props
        const {loading} = this.state
        return(
            <div className="shop-page">
                <Route exact path={`${match.path}`} render={(props) => <CollectionOverviewWithSpinner isLoading={loading} {...props} />}/>
                <Route path={`${match.path}/:collectionId`} render={(props) =><CollectionPageWithSpinner isLoading={loading} {...props}/>}/>
            </div>
        )
    }

}

const mapDispatchToProps = (dispatch) => ({
    updateCollections:collectionsMap => dispatch(updateCollections(collectionsMap))
})

export default connect(null,mapDispatchToProps)(ShopComponent);