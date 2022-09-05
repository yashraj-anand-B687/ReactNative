import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';

export default function AddTodo({setHandler}) {
  const [text, setText] = useState('');

  const changeHandler = val => {
    console.log(val);
    setText(val);
  };
  return (
    <>
      <View style={styles.container}>
        <TextInput
          style={styles.input}
          placeholder="Add To-Do"
          onChangeText={val => changeHandler(val)}
          onSubmitEditing={() => setHandler(text)}
        />
        <Foundation
          name="plus"
          onPress={() => setHandler(text)}
          style={styles.icon}
        />
        {/* <VectorImage source={require('./image.svg')} /> */}
      </View>
      <View>
        <Text style={styles.head2}>Your To-Do List:</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  input: {
    flex: 10,
    backgroundColor: '#EEEEEE',
    borderWidth: 1,
    borderRadius: 7,
    fontWeight: 'bold',
    marginTop: 15,
    margin: 1,
    padding: 10,
    height: 50,
  },
  head2: {
    padding: 10,
    marginTop: 10,
    marginLeft: -10,
    marginBottom: -5,
    fontSize: 16,
    color: '#fff',
    fontWeight: 'bold',
  },
  icon: {
    flex: 1,
    color: '#333',
    fontSize: 25,
    marginTop: 15,
    marginLeft: -35,
  },
});
