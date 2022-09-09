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
import {useDispatch, useSelector} from 'react-redux';
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';
import {Editt} from './store/action';

export default function Counter() {
  const data = useSelector(state => state);
  const dispatch = useDispatch();

  const [modalOpen, setModalOpen] = useState(false);
  const [vall, setVall] = useState([]);

  useEffect(() => {
    console.log(vall);
    console.log(data);
  });

  const editHandler = key => {
    //edit
    data.map(todo => {
      todo.key === key ? setVall({text: todo.text, id: key}) : todo;
    });
    setModalOpen(true);
  };

  const chHandler = val => {
    //edit handler
    setVall(prev => ({...prev, text: val}));
  };

  const savHandler = e => {
    dispatch(Editt(vall));
    setModalOpen(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Modal visible={modalOpen} animationType="fade" transparent={true}>
        <View style={styles.modalContent}>
          <View style={styles.contentm}>
            <TextInput
              style={styles.input}
              placeholder="Edit To-Do"
              value={vall.text}
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
        source={require('./components/img/bgImage.png')}
        style={styles.image}>
        <Header />
        <View style={styles.content}>
          <AddTodo />
          <View style={styles.list}>
            <FlatList
              data={data}
              renderItem={({item}) => (
                <TodoItem item={item} editHandler={editHandler} />
              )}
            />
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}
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
    width: null,
    paddingHorizontal: 16,
  },
  modalContent: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
    alignItems: 'center',
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
