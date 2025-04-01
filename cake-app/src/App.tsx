import CakeContainer from './Components/CakeContainer/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import HookCakeContainer from './Components/HookCakeContainer/HookCakeContainer';
import CakeIceCream from './Components/CakeIceCream/CakeIceCream';

function App() {

  return (
    <Provider store={store}>
      <CakeContainer />
      <CakeIceCream />
    </Provider>
  )
}

export default App
