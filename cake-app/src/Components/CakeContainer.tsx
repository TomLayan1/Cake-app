import React from 'react';
import './cakeContainer.css'
import { RootState } from '../Redux/Store';
import { buyCake } from '../Redux/Cake/cakeAction';
import { connect } from 'react-redux';

type PropsType = {
  numOfCakes: number;
  buyCake: () => void;
}

const CakeContainer:React.FC<PropsType> = ({ numOfCakes, buyCake }) => {
  return (
    <div className='cake_container'>
      <h2 className='cake_num'>Number of cakes - <strong>{numOfCakes}</strong></h2>
      <button className='buy_btn' onClick={buyCake}>Buy cake</button>
    </div>
  )
}

const mapStateToProps = (state: RootState) => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}

export default connect(mapStateToProps, mapDispatchToProps) (CakeContainer)