import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
  Modal,
  TextInput,
  Text,
} from 'react-native';
import Counter from './src/Counter';
import {Provider} from 'react-redux';
import {store} from './src/store/store';

export default function App(props) {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
