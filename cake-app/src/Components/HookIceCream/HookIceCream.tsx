import React from 'react'
import './HookIceCream.css'
import { RootState } from '../../Redux/Store';
import { buyIceCream } from '../../Redux/Ice Cream/iceCreamAction';
import { useDispatch, useSelector } from 'react-redux';

const HookIceCream:React.FC = () => {
  const numOfIceCream = useSelector((state: RootState) => state?.iceCream?.numOfIceCream);
  const dispatch = useDispatch();

  return (
    <div className='main_hook_container'>
      <div className='hook_inner_container'>
        <h1 className='hook_cream_num'>Number of ice cream - <strong>{numOfIceCream}</strong></h1>
        <button onClick={() => dispatch(buyIceCream())} className='hook_buy_cream'>Buy ice cream</button>
      </div>
    </div>
  )
}

export default HookIceCream