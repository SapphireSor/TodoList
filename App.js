import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Heder';
import TodoItem from './components/TodoItem';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Play MoonLighter', _id: '1' },
    { text: 'Read Eragon', _id: '2' },
    { text: 'Continue Programing Project', _id: '3' },
    { text: 'Exercise', _id: '4' },
  ])

  const pressTodoHandler = (key) => {
    setTodos((prevTodos) => {
      return prevTodos.filter((todo) => todo._id != key)
    })
  }

  const addNewTodo = (todo) => {
    const newId = Math.max(...todos.map((todo) => todo._id)) + 1
    setTodos((prevTodos) => [{text:todo, _id: newId.toString()}, ...prevTodos])
  }

  return (
    <View style={styles.container}>
      <Header />
      {/*Body*/}
      {/* <View> */}
        <AddTodo addNewTodo={addNewTodo} />
      {/* </View> */}
      <View style={styles.body}>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <TodoItem item={item} pressHandler={pressTodoHandler}/>
          )}
          keyExtractor={(item) => item._id} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  body: {
    width: '90%',
  }
});
