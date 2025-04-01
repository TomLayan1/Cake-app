import React from 'react'
import './HookCakeContainer.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/Store'
import { buyCake } from '../../Redux/Cake/cakeAction'

const HookCakeContainer:React.FC = () => {
  const numOfCakes = useSelector((state:RootState) => state?.numOfCakes);
  const dispatch = useDispatch();

  return (
    <div className='main_hook_container'>
      <div className='hook_inner_container'>
        <h1 className='hook_cake_num'>Number of cakes - <strong>{numOfCakes}</strong></h1>
        <button onClick={() => dispatch(buyCake())} className='hook_buy_cake'>Buy cake</button>
      </div>
    </div>
  )
}

export default HookCakeContainer