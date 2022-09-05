import React, {useState, useEffect} from 'react';
import {
  StyleSheet,
  View,
  SafeAreaView,
  FlatList,
  ImageBackground,
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

  useEffect(() => {
    console.log(todos);
  });

  const setHandler = text => {
    console.log(text);
    if (text !== null) {
      setTodos(prevTodos => {
        return [
          {text: text, complete: false, key: Math.random().toString()},
          ...prevTodos,
        ];
      });
    }
    // setTodos(prevTodos => {
    //   return [
    //     {text: text, complete: false, key: Math.random().toString()},
    //     ...prevTodos,
    //   ];
    // });
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

  return (
    <SafeAreaView style={styles.container}>
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
                <TodoItem item={item} pressHandler={pressHandler} comp={comp} />
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
});
