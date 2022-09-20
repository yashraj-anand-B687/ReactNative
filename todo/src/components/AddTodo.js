import React, {useState} from 'react';
import {StyleSheet, Text, View, TextInput} from 'react-native';
import Foundation from 'react-native-vector-icons/Foundation';
import {firestore} from '../../App';

var addd = '';

export {addd};
export default function AddTodo({addo}) {
  const usersCollectionRef = firestore().collection('todos');
  const [text, setText] = useState('');

  const addVal = () => {
    setText('');
    usersCollectionRef //addition of object to collection
      .add({
        todo: text,
        completed: false,
      })
      .then(() => {
        console.log('todo added!');
      });
    addo();
  };

  const changeHandler = val => {
    setText(val);
  };

  return (
    <>
      <View style={styles.container}>
        <TextInput
          value={text}
          style={styles.input}
          placeholder="Add To-Do"
          onChangeText={val => changeHandler(val)}
          onSubmitEditing={addVal}
        />
        <Foundation name="plus" onPress={addVal} style={styles.icon} />
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
