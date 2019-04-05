import React from "react";

const CardContainer = props => {
  console.log(props.children);
  return (
    <div className="ui card">
      <div className="content">{props.children}</div>
      <div className="extra content">
        <div className="ui two buttons">
          <div
            className="ui basic grey button"
            onClick={props.addToCart}
            name={props.children.props.productDesc}
          >
            Add To Cart
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;