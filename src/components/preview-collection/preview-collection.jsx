import React, { Component } from 'react'
import CollectionItem from '../collection-item/collection-item.component'

import ('./preview-collection.scss')

const PreviewCollection = ({title, items}) =>{
    return(
        <div className='collection-preview'>
            <h1 className='title'>{title.toUpperCase()}</h1>
            <div className='preview'>
 {
     items.filter((item,idx) => idx < 4).map(({id, ...item}) => 
         <CollectionItem key={id}{...item}/>
     )
 }
            </div>
        </div>
    )
}

export default PreviewCollection