import React from 'react';

export default (props) => {
  const productInfo = props.location.state.productInfo;
    return (
      <div>
        <p><b>{productInfo.brandName}</b></p>
        <p>{productInfo.productName}</p>
      </div>
    );
  
}