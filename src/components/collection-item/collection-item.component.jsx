import React from 'react';
import './collection-item.styles.scss';

/* this is going to be the layout of our collection-item
* that will be shown in the collection
*  */
const CollectionItem = ({id, name, price, imageUrl}) => {
    return(
        <div className="collection-item">
            <div className="image"
                 style={{backgroundImage:`url(${imageUrl})`}}
            />
            {/* this div will show name and price at the bottom of the item */}
            <div className="collection-footer">
                <span className="name">
                    {name}
                </span>
                <span className="price">
                    {price}
                </span>
            </div>
        </div>
    )
}

export default CollectionItem;