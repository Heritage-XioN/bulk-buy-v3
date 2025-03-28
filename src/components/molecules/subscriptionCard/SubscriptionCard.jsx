import React from 'react'
import './subscriptionCard.css'

const SubscriptionCard = () => {
  return (
    <div className='subscription-card'>
      <div className='card-details'>
          <h2>Subscription Orders</h2>
          <div>Set up recurring orders for your essentials</div>
      </div>
      <button>Subscribe now</button>
    </div>
  )
}

export default SubscriptionCard