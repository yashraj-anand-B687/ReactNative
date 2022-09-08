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
import AddTodo from './components/AddTodo';
import Header from './components/Header';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    {text: 'buy coffee', complete: true, key: '1'},
    {text: 'create an app', complete: false, key: '2'},
    {text: 'play on the switch', complete: true, key: '3'},
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [vall, setVall] = useState([]);

  useEffect(() => {
    console.log(todos);
    console.log(vall);
  });

  const setHandler = text => {
    console.log(text);
    if (text.length > 0) {
      setTodos(prevTodos => {
        return [
          {text: text, complete: false, key: Math.random().toString()},
          ...prevTodos,
        ];
      });
    }
  };

  const comp = key => {
    const newState = todos.map(todo => {
      if (todo.key === key) {
        return {...todo, complete: !todo.complete};
      }
      return todo;
    });

    setTodos(newState);
  };

  const pressHandler = key => {
    setTodos(prevTodos => {
      return prevTodos.filter(todo => todo.key !== key);
    });
  };

  const editHandler = key => {
    todos.map(todo => {
      todo.key === key ? setVall({text: todo.text, id: key}) : todo;
    });
    setModalOpen(true);
  };

  const chHandler = val => {
    setVall(prev => ({...prev, text: val}));
  };

  const savHandler = e => {
    console.log('test');
    const newState = todos.map(todo => {
      if (todo.key === vall.id) {
        return {...todo, text: vall.text};
      }
      return todo;
    });
    setTodos(newState);
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
        source={require('../todo/components/img/bgImage.png')}
        style={styles.image}>
        <Header />
        <View style={styles.content}>
          {/* enter todo */}
          <AddTodo setHandler={setHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({item}) => (
                <TodoItem
                  item={item}
                  pressHandler={pressHandler}
                  editHandler={editHandler}
                  comp={comp}
                />
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
