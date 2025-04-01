import React from 'react';
import { RootState } from '../Redux/Store';
import { buyCake } from '../Redux/Cake/cakeAction';
import { connect } from 'react-redux';

type PropsType = {
  numOfCakes: number;
  buyCake: () => void;
}

const CakeContainer:React.FC<PropsType> = ({ numOfCakes, buyCake }) => {
  return (
    <div>
      <h2>Number of cakes - <strong>{numOfCakes}</strong></h2>
      <button onClick={buyCake}>Buy cake</button>
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