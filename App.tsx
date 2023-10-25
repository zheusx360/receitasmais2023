import React from 'react';
import { Login } from './src/modules/auth/login';
import { LogBox, StatusBar } from 'react-native';

StatusBar.setBackgroundColor('rgba(0,0,0,0)');
StatusBar.setTranslucent(true);
LogBox.ignoreAllLogs(true);

function App(): JSX.Element {
  return <Login />;
}

export default App;
