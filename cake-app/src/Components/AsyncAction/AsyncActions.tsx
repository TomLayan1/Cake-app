import React, {useEffect} from 'react';
import './AsyncActioni.css'
import { useDispatch, useSelector } from 'react-redux';
import { fetchUser } from '../../Redux/User/userAction';
import { RootState } from '../../Redux/Store';
import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

const AsyncActions:React.FC = () => {
  const dispatch: ThunkDispatch<RootState, void, AnyAction> = useDispatch();
  const usersData = useSelector((state:RootState) => state?.user);

  console.log(usersData?.users);

  useEffect(() => {
    dispatch(fetchUser());
  }, [dispatch]);

  return (
    <div className='async_main_container'>
      {usersData?.loading ? 
        <p>Loading...</p>
        : usersData?.users ?
        <div className='cards_container'>
          {usersData?.users.map(user => (
            <div className='user_container' key={user.id}>
              <h3 className='user_name'>Name: {user.name}</h3>
              <p className='user_email'>Email: {user.email}</p>
              <h4 className='user_company'>Company: {user.company.name}</h4>
            </div>
          ))}
        </div>
        :
        <div></div>
      }
    </div>
  )
}

export default AsyncActions