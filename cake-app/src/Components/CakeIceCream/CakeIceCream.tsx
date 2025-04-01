import React from 'react'
import './CakeIceCream.css'
import HookCakeContainer from '../HookCakeContainer/HookCakeContainer'
import HookIceCream from '../HookIceCream/HookIceCream'

const CakeIceCream:React.FC = () => {
  return (
    <div className='cake_cream_container'>
      <HookCakeContainer />
      <HookIceCream />
    </div>
  )
}

export default CakeIceCream