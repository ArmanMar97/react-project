import {connect} from "react-redux";
import {createStructuredSelector} from "reselect";
import {selectIsCollectionFetching} from "../../redux/shop/shop.selectors";
import WithSpinner from "../withSpinner/withSpinner";
import CollectionOverview from "./collections-overview";
import {compose} from "redux";

const mapStateToProps = createStructuredSelector({
    isLoading:selectIsCollectionFetching
})

const CollectionOverviewContainer = compose(
    connect(mapStateToProps),
    WithSpinner
)(CollectionOverview)

export default CollectionOverviewContainer
