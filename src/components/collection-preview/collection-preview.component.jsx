import React from 'react';
import CollectionItem from "../collection-item/collection-item.component";
import "./collection-preview.style.scss";

const CollectionPreview = ({title,items}) => {
    return(
        <div className="collection-preview">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            {/*  here we print items from the item array that we send as the props  */}
            <div className="preview">
                {/* we can make use of multiple filter and map at the same time */}
                {items
                    .filter((item, idx) => idx < 4)
                    .map( ({id, ...otherItemProps}) => (
                        <CollectionItem key={id} {...otherItemProps} />
                    ) )
                }
            </div>
        </div>
    );
};

export default CollectionPreview;