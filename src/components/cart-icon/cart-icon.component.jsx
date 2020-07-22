import { ReactComponent as ShoppingIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.style.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { selectCartItemsCounts } from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";

import React from "react";

const cartIcon = ({ toggleCartHidden, itemscount }) => {
  return (
    <div className="cart-icon" onClick={toggleCartHidden}>
      <ShoppingIcon className="shopping-icon" />
      <span className="item-count">{itemscount}</span>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = createStructuredSelector({
  itemscount: selectCartItemsCounts,
});

export default connect(mapStateToProps, mapDispatchToProps)(cartIcon);
