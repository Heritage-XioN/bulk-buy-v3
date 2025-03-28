import React from 'react'
import "./product_listing.css"
import NavBar from '@/components/molecules/navbar/Navbar';
import Search from '@/components/atom/search/Search';
import ProductCard from '@/components/molecules/productCard/ProductCard';
import SubscriptionCard from '@/components/molecules/subscriptionCard/SubscriptionCard';

const ProductListing = () => {
  return (
    <div className='product-listing'>
      <NavBar />
      <main>
        <Search />
        <SubscriptionCard />
        <div className='product-list'>
          <ProductCard />
        </div>
      </main>
      
    </div>
  )
}

export default ProductListing