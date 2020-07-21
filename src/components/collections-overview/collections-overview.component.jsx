import React from "react";
import { connect } from 'react-redux'
import { createStructuredSelector} from "reselect";

import './collections-overview.syles.scss';
import PreviewCollectionComponent from "../preview-collection/preview-collection.component";
import {selectCollections, selectCollectionsForPreview} from "../../redux/shop/shop.selectors";


const CollectionsOverview = ({ collections }) => (
	<div className={'collections-overview'}>
		{collections.map(({id, ...otherProps}) =>
			<PreviewCollectionComponent key={id} {...otherProps}/>
		)
		}
	</div>
)
const mapStateToProps = createStructuredSelector({
	collections: selectCollectionsForPreview
})
export default connect(mapStateToProps)(CollectionsOverview);
