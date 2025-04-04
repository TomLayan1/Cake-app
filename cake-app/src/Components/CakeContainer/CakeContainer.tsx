import React, { useState } from 'react';
import './cakeContainer.css'
import { RootState } from '../../Redux/Store';
import { buyCake } from '../../Redux/Cake/cakeAction';
import { connect } from 'react-redux';
import { Dispatch } from 'redux';


type PropsType = {
  numOfCakes: number;
  buyCake: (cakeNumber: number) => void;
}

const CakeContainer:React.FC<PropsType> = ({ numOfCakes, buyCake}) => {
  const [cakeNumber, setCakeNumber] = useState<number>(1);
  return (
    <div className='cake_container'>
      <h1 className='cake_num'>Number of cakes - <strong>{numOfCakes}</strong></h1>
      <div className='input_btn_container'>
        <input
          className='cake_quantity_input'
          type='text'
          value={cakeNumber}
          onChange={e => setCakeNumber(Number(e.target.value))}
        />
        <button onClick={() => buyCake(cakeNumber)} className='buy_btn'>Buy {cakeNumber} cake{cakeNumber > 1 ? 's' : ''}</button>
      </div>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    numOfCakes: state?.cake?.numOfCakes
  }
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    buyCake: (cakeNumber: number) => dispatch(buyCake(cakeNumber))
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)
