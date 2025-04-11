import React from 'react'
import "./product_listing.css"
import NavBar from '@/components/molecules/navbar/Navbar';
import Search from '@/components/atom/search/Search';
import ProductCard from '@/components/molecules/productCard/ProductCard';
import SubscriptionCard from '@/components/molecules/subscriptionCard/SubscriptionCard';

const stock = ['Rice', 'Beans', 'Garri', 'Indomie', 'Milo', 'Milk', 'Rice', 'Beans', 'Garri', 'Indomie', 'Milo', 'Milk', 'Rice', 'Beans', 'Garri', 'Indomie', 'Milo', 'Milk'];

const ProductListing = () => {
  //import the verifySession function from the lib/dai.js
  //the function is used as an extra layer of security to verify if th user authenticated
  return (
    <div className='product-listing'>
      <NavBar />
      <main>
        <Search />
        <SubscriptionCard />
        <div className='product-list'>
          {stock.map((item,index) => (
            <ProductCard name={item} key={index}/>
          ))}
        </div>
        <div className='page-details'>
          <span>Page <span className='page-no'>2</span> of 5</span>
          <span className="pages">
            <button className='prev'>Previous</button>
            <input type="radio" name="page-num" id="1" />
            <input type="radio" name="page-num" id="2" />
            <input type="radio" name="page-num" id="3" />
            <input type="radio" name="page-num" id="4" />
            <input type="radio" name="page-num" id="5" />
            <button className='next'>Next</button>
          </span>
        </div>
      </main>
      
    </div>
  )
}

export default ProductListing