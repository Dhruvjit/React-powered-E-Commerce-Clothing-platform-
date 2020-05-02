import React from 'react';
import './menu-item.style.scss';
import {withRouter} from 'react-router-dom';

/* destructuring props with name title and only passing that out of props */
const MenuItem = ({title, imageUrl, size, history, linkUrl, match}) => {
    /* history.push() is equivalent of <Link> element but its handy when
    * we need to bind a button or div or similar component to change invoke
    * routing
    *  */
    return(
        <div className={`${size} menu-item`}
             onClick={() => history.push(`${match.url}${linkUrl}`)}>
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
    );
};

/* withRouter is a Higher Order Component i.e. it takes a component as an input and manipulates it in a specific way and returns it */
/* so inour case we want to pass history props for routing from homepage to this component
* we cannot do 'props tunneling' it in every component to reach our way here hence we need to use withRouter
* withRouter taken MenuItem as an input and sends
*  */
export const MenuCardItem =  withRouter(MenuItem);

