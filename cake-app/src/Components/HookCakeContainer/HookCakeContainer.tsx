import React, { useState } from 'react'
import './HookCakeContainer.css'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../../Redux/Store'
import { buyCake } from '../../Redux/Cake/cakeAction'

const HookCakeContainer:React.FC = () => {
  const numOfCakes = useSelector((state:RootState) => state?.cake?.numOfCakes);
  const dispatch = useDispatch();

  const [cakeNumber, setCakeNumber] = useState<number>(1);

  return (
    <div className='main_hook_container'>
      <div className='hook_inner_container'>
        <h1 className='hook_cake_num'>Number of cakes - <strong>{numOfCakes}</strong></h1>
        <div className='input_btn_container'>
          <input 
            className='cake_quantity_input'
            type='text'
            value={cakeNumber}
            onChange={e => setCakeNumber(Number(e.target.value))}
          />
        </div>
        <button onClick={() => dispatch(buyCake(cakeNumber))} className='hook_buy_cake'>Buy {cakeNumber} cake{cakeNumber > 1 ? 's' : ''}</button>
      </div>
    </div>
  )
}

export default HookCakeContainer