import React from 'react';
import Counter from './src/screens/Counter';
import firestore from '@react-native-firebase/firestore';

export {firestore};

export default function App() {
  return <Counter />;
}
