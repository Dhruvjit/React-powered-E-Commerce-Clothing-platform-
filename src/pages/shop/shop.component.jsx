import React from 'react';
import SHOP_DATA from "./shop.data";
import CollectionPreview from "../../components/collection-preview/collection-preview.component";

/* Here we need to store data related to actual
*  collection on our shop page hence we chose to build this as
*  state component
*  */

class ShopPage extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }

    render() {
        const {collections} = this.state;
        return (
            <div className="shop-page">
                {
                    // in otherCollectionProps we are mainly sending title and sub-item array for every item. e.g. hat is item
                    collections.map(({id, ...otherCollectionProps}) => (
                        <CollectionPreview key={id} {...otherCollectionProps}/>
                    ))
                }
            </div>
        );
    }
}

export default ShopPage