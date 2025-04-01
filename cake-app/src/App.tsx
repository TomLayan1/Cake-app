import CakeContainer from './Components/CakeContainer';
import { Provider } from 'react-redux';
import store from './Redux/Store';

function App() {

  return (
    <Provider store={store}>
      <CakeContainer />
    </Provider>
  )
}

export default App
