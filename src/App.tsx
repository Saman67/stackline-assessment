import React from 'react';
import {Provider} from 'react-redux'
import {store} from './store'
import {Header} from "./components/header";
import {ProductView} from "./components/product/product";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Header/>
        <ProductView />
      </div>
    </Provider>
  );
}

export default App;
