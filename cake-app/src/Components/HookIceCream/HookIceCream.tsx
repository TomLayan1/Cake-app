import React, { useState } from 'react'
import './HookIceCream.css'
import { RootState } from '../../Redux/Store';
import { buyIceCream } from '../../Redux/Ice Cream/iceCreamAction';
import { useDispatch, useSelector } from 'react-redux';

const HookIceCream:React.FC = () => {
  const numOfIceCream = useSelector((state: RootState) => state?.iceCream?.numOfIceCream);
  const dispatch = useDispatch();

  // Ice cream quantity
  const [iceCreamNumber, setIceCreamNumber] = useState<number>(1);

  return (
    <div className='main_hook_container'>
      <div className='hook_inner_container'>
          <h1 className='hook_cream_num'>Number of ice cream - <strong>{numOfIceCream}</strong></h1>
        <div className='input_btn_container'>
          <input 
            className='cream_quantity_input'
            type='text'
            value={iceCreamNumber}
            onChange={e => setIceCreamNumber(Number(e.target.value))}
          />
          <button onClick={() => dispatch(buyIceCream(iceCreamNumber))} className='hook_buy_cream'>Buy {iceCreamNumber} ice cream{iceCreamNumber > 1 ? 's' : ''}</button>
        </div>
      </div>
    </div>
  )
}

export default HookIceCream