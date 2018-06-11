import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from  'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyDqDOQartkHqrJWio44_VV2ifXlLMzes5c',
      authDomain: 'manager-2851b.firebaseapp.com',
      databaseURL: 'https://manager-2851b.firebaseio.com',
      projectId: 'manager-2851b',
      storageBucket: '',
      messagingSenderId: '134138269590'
    };
    firebase.initializeApp(config);
  }
  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk))
    return (
      <Provider store={store}>
        <LoginForm />
      </Provider>
    );
  }
}

export default App;
