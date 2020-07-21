import React from "react";
import { connect } from 'react-redux';

import CollectionItem from "../../components/collection-item/collection-item.component";

import { selectCollection } from "../../redux/shop/shop.selectors";
import './collection.styles.scss'

const CollectionPage = ({ match, collection }) => {
	console.log('Collection ID: '+match.params.collectionId)
	return (
		<div className="collection-page">
			<h2 className={'Title'}>{collection.title}</h2>
			{
				(collection.items.map(item => {
					return <CollectionItem className="item" item={item}/>
				}))
			}
		</div>
	)
}

const mapStateToProps = (state, ownProps) => ({
	collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollectionPage)
