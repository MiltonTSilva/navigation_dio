import React from 'react';
import { StatusBar } from 'react-native';
import 'react-native-gesture-handler';

import Routes from './routes';

const App = () => {
    return (
        <>
            <StatusBar barStyle="dark-content" backgroundColor="#D2691E" />
            <Routes />
        </>
    );
};

export default App;
