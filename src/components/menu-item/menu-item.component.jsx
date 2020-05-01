import React from 'react';
import './menu-item.style.scss';

/* destructuring props with name title and only passing that out of props */
export const MenuItem = ({title, imageUrl, size}) => (
    <div className={`${size} menu-item`}>
        {/* here the background image should only scale inside the div
          * hence we have assigned the image to another div.
        */}
        <div className="background-image"
             style={{
                 backgroundImage: `url(${imageUrl})`
             }}
        />
        <div className="content">
            <h1 className="title">
                {title.toUpperCase()}
            </h1>
            <span className="subtitle">
                Shop Now
            </span>
        </div>
    </div>
)