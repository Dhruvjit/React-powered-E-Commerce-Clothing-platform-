import React from 'react';
import './directory.style.scss';
import {MenuCardItem} from "../menu-item/menu-item.component";

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
                    linkUrl: 'hats'
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/jackets.png',
                    id: 2,
                    linkUrl: 'jackets'
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3,
                    linkUrl: 'sneakers'
                },
                {
                    title: 'womens',
                    imageUrl: 'https://ichef.bbci.co.uk/news/1024/cpsprodpb/C818/production/_109642215_angels.jpg',
                    size: 'large',
                    id: 4,
                    linkUrl: 'womens'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://www.inquirer.com/resizer/fUBPggXKdNxIwZbpOX2UdAJyX74=/1400x0/center/middle/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/V63REVZQLBF73PWZCHKO7JJ2WI.jpg',
                    size: 'large',
                    id: 5,
                    linkUrl: 'mens'
                },
                {
                    title: 'wedding',
                    imageUrl: 'https://www.eventfaqs.com/uploads/june%2028/man2.jpg',
                    size: 'large',
                    id: 6,
                    linkUrl: 'wedding'
                },
                {
                    title: 'Kids',
                    imageUrl: 'https://www.metroparent.com/wp-content/uploads/2019/09/navigating-kids-friendships.jpeg',
                    id: 7,
                    linkUrl: 'kids'
                },
                {
                    title: 'Accessories',
                    imageUrl: 'https://i-cdn.phonearena.com/images/article/101536-two_lead/Essential-is-now-selling-phone-accessories-including-HD-earphones-and-USB-C-to-3.5mm-adapters.jpg',
                    id: 8,
                    linkUrl: 'kids'
                }
            ]
        };
    }

    render(){
        return(
            <div className="directory-menu">
                {
                    // this.state.sections.map(({title, imageUrl, id,size, linkUrl}) => (
                    //     <MenuItem key={id}
                    //               title={title}
                    //               imageUrl={imageUrl}
                    //               size={size}
                    //               linkUrl={linkUrl}
                    //     />
                    // ))

                    /* alternatively we can even write above code in short destructuring format as below */
                    this.state.sections.map(({id, ...otherProps}) => (
                        <MenuCardItem key={id} {...otherProps}/>
                    ))
                }
            </div>
        )
    }
}

export default Directory;