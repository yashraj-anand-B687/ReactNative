import React from 'react';
import Counter from './src/screens/Counter';
import firestore from '@react-native-firebase/firestore';
import Nativeb from './src/screens/Nativeb';

export {firestore};

const App = () => {
  return <Counter />;
};

export default App;
