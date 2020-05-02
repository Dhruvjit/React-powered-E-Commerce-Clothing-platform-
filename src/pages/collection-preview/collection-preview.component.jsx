import React from 'react';

const CollectionPreview = ({title,items}) => (
    <div className="collection-preview">
        <h1 className="title">
            {title.toUpperCase()}
        </h1>
        {/*  here we print items from the item array that we send as the props  */}
        <div className="preview">
            {/* we can make use of multiple filter and map at the same time */}
            {items
                .filter((item,idx) => idx < 4)
                .map(item => (
                <div key={item.id}>
                    {item.name}
                </div>
            ))}
        </div>
    </div>
);

export default CollectionPreview;