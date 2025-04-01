import CakeContainer from './Components/CakeContainer/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Store';
import HookCakeContainer from './Components/HookCakeContainer/HookCakeContainer';

function App() {

  return (
    <Provider store={store}>
      <CakeContainer />
      <HookCakeContainer />
    </Provider>
  )
}

export default App
