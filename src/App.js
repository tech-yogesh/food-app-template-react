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
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage' 
import { PersistGate } from 'redux-persist/integration/react'

import Home from './views/Home';
import OrderList from './views/Cart';
import Shipping from './views/Order';

import reducer from './store/reducer';

const persistConfig = {
  key: 'root',
  storage,
}

function App() {
  const persistedReducer = persistReducer(persistConfig, reducer)
  const store = createStore(persistedReducer);
  const persistor = persistStore(store)
  return (
    <Provider store={store}>
     <PersistGate loading={null} persistor={persistor}>
    <BrowserRouter>
    <Switch>
    <Route path='/' exact><Home/></Route>
    <Route path='/orders'><OrderList/></Route>
    <Route path='/shipping'><Shipping/></Route>
    <Route path='/*'><Home/></Route>
    </Switch>
    </BrowserRouter>
    </PersistGate>
    </Provider>
  );
}

export default App;
