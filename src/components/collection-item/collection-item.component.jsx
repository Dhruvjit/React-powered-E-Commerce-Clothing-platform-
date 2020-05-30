import React from 'react';
import './collection-item.styles.scss';
import CustomButton from "../custom-button/custom-button.component";
import {setCurrentUser} from "../../redux/user/user.actions";
import {addItem} from "../../redux/cart/cart.actions";
import {connect} from 'react-redux';

/* this is going to be the layout of our collection-item
* that will be shown in the collection
*  */
const CollectionItem = ({item, addItem}) => {
    const {name, price, imageUrl} = item;
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

            {/*  custom button style  */}
            <CustomButton onClick={() => addItem(item)} inverted={true}>
                Add to Cart
            </CustomButton>
        </div>
    );
}

const mapDispatchToProps = dispatch => ({
    // dispatch here denotes that whatever is going to passed to me
    // will be used as action object that i ll pass to every reducer

    addItem: item => dispatch(addItem(item))

    /*
    * addItem is property, item is payload and dispatch is
    * method call to cart.action method
    * */
});

/* by binding the CollectionItem with connect we are sending
* addItem located in mapDispatchToProps function as props to our main
* CollectionItem component in order to be used as props
* */
export default connect(null, mapDispatchToProps)(CollectionItem);