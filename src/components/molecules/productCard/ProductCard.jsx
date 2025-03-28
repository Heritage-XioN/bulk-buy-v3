import React from 'react';
import Image from 'next/image';
import './productCard.css'

const ProductCard = ({name, price, src}) => {
 
  // if (!name) {
  //   name = <span className='product-name'>Product</span>;
  // }
  // else {
  //   name = <div>Name</div>
  // }
  
  return (
    <div className='product-card'>
        <div className='img-container'>
           <Image src='/images/rice1.png' height={150} width={100} alt="sideframe" />
        </div>
        <div className='product-details'>
          {name}
          <div>N400</div>
        </div>
        <button className='cta'>Add to Cart</button>

    </div>
  )
}

export default ProductCard