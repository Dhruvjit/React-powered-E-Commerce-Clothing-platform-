import React from 'react';
import {MenuItem} from "../menu-item/menu-item.component";
import './directory.style.scss';

/* this will be a state item
*   because we need to store state value of
*   menu items that we want to pass and create our items
*   this is just like state powered card-list item in monster search project
* */

// directory will hold all the menu item
class Directory extends React.Component {
    constructor() {
        super();
        this.state = {
            sections:[
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1,
                    linkUrl: 'shop/hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'shop/jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'shop/sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/C818/production/_109642215_angels.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'shop/womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://www.inquirer.com/resizer/fUBPggXKdNxIwZbpOX2UdAJyX74=/1400x0/center/middle/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/V63REVZQLBF73PWZCHKO7JJ2WI.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'shop/mens'
                }
            ]
        };
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    this.state.sections.map(({title, imageUrl, id,size}) => (
                        <MenuItem key={id}
                                  title={title}
                                  imageUrl={imageUrl}
                                  size={size}
                        />
                    ))
                }
            </div>
        )
    }
}

export default Directory;