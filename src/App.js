import React, { useEfect } from 'react';
import { Provider } from 'react-redux';

import store from './AppStore';
import AppRouter from './App.Router';


const App = () => {
  return (
    <Provider store={store}>
        <AppRouter />
    </Provider>
  );
};

export default App;
