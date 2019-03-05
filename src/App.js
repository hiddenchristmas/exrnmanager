import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import firebase from 'firebase';
import reducers from './reducers';
import LoginForm from './components/LoginForm';

class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyCIJaRuNO3ADEUiQ8jB_rc4fBwUtQ3_jmE',
            authDomain: 'manager-e4738.firebaseapp.com',
            databaseURL: 'https://manager-e4738.firebaseio.com',
            projectId: 'manager-e4738',
            storageBucket: 'manager-e4738.appspot.com',
            messagingSenderId: '887763918',
        };
        firebase.initializeApp(config);
    }

    render(){
        return(
            <Provider store={createStore(reducers)}>
                <LoginForm />
            </Provider>
        );
    }
}

export default App;
