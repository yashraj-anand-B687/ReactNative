/* eslint-disable react-hooks/exhaustive-deps */
import {NativeBaseProvider} from 'native-base';
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
import {firestore} from '../../App';
import AddTodo from '../compoNB/AddTodo';
import Header from '../compoNB/Header';
import TodoItem from '../compoNB/TodoItem';

type fdb = {
  id: string;
  todo: string;
  completed: boolean;
};

type evaal = {
  text: string;
  id: string;
};

const Counter = () => {
  const usersCollectionRef = firestore().collection('todos');
  const [firdb, setFirdb] = useState<fdb[]>([]);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [editval, setEditVal] = useState<evaal>({text: '', id: ''});

  useEffect(() => {
    callData();
  }, []);

  const callData = (): void => {
    usersCollectionRef.get().then(querySnapshot => {
      setFirdb([]);
      querySnapshot.forEach(documentSnapshot => {
        setFirdb(prev => {
          return [
            {
              id: documentSnapshot.id,
              todo: documentSnapshot.data().todo,
              completed: documentSnapshot.data().completed,
            },
            ...prev,
          ];
        });
      });
    });
  };

  const editHandler = (id: string): void => {
    //edit
    firdb.map(todo => {
      todo.id === id ? setEditVal({text: todo.todo, id: id}) : todo;
    });
    setModalOpen(true);
  };

  const chHandler = (val: string): void => {
    //edit handler
    setEditVal((prev: evaal) => ({...prev, text: val}));
  };

  const savHandler = (): void => {
    usersCollectionRef
      .doc(editval.id) //update values of specific object identified with id
      .update({
        todo: editval.text,
      })
      .then(() => {
        // console.log('todo updated!');
      });
    callData();
    setModalOpen(false);
  };

  return (
    <NativeBaseProvider>
      <SafeAreaView style={styles.container}>
        <Modal visible={modalOpen} animationType="fade" transparent={true}>
          <View style={styles.modalContent}>
            <View style={styles.contentm}>
              <TextInput
                style={styles.input}
                placeholder="Edit To-Do"
                value={editval.text}
                onChangeText={val => chHandler(val)}
                onSubmitEditing={() => savHandler()}
              />
              <Text onPress={() => savHandler()} style={styles.editb}>
                Save Changes
              </Text>
            </View>
          </View>
        </Modal>
        <ImageBackground
          source={require('../compoNB/img/bgImage.png')}
          style={styles.image}>
          <Header />
          <View style={styles.content}>
            <AddTodo addo={callData} />
            <View style={styles.list}>
              <FlatList
                data={firdb}
                renderItem={({item}) => (
                  <TodoItem
                    item={item}
                    editHandler={editHandler}
                    deleo={callData}
                  />
                )}
              />
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </NativeBaseProvider>
  );
};

export default Counter;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  content: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  list: {
    flex: 1,
    backgroundColor: 'transparent',
  },
  image: {
    flex: 1,
    height: 550,
    paddingHorizontal: 16,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  contentm: {
    padding: 20,
    backgroundColor: '#89A1FF',
    borderRadius: 10,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  editb: {
    borderRadius: 6,
    padding: 6,
    marginTop: 15,
    fontSize: 12,
    backgroundColor: '#5074FF',
    borderColor: 'white',
    color: '#fff',
  },
  input: {
    borderWidth: 2,
    borderRadius: 6,
    fontSize: 20,
    color: '#000',
    backgroundColor: '#FFF',
    padding: 6,
    justifyContent: 'center',
  },
});
