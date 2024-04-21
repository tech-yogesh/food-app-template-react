import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter,
  Switch,
  Route,
  Link,
  Redirect
} from "react-router-dom";
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import Home from './views/Home';
import OrderList from './views/Cart';
import Shipping from './views/Order';

import reducer from './store/reducer';
function App() {
  const store = createStore(reducer);
  return (
    <Provider store={store}>
    <BrowserRouter>
    <Switch>
    <Route path='/' exact><Home/></Route>
    <Route path='/orders'><OrderList/></Route>
    <Route path='/shipping'><Shipping/></Route>
    </Switch>
    </BrowserRouter>
    </Provider>
  );
}

export default App;
