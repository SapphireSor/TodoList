import React, { useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import Header from './components/Heder';

export default function App() {
  const [todos, setTodos] = useState([
    { text: 'Play MoonLighter', _id: '1' },
    { text: 'Read Eragon', _id: '2' },
    { text: 'Continue Programing Project', _id: '3' },
    { text: 'Exercise', _id: '4' },
  ])
  return (
    <View style={styles.container}>
      <View style={styles.statusBar}></View>
      <Header />
      {/*Body*/}
      <View>
        <FlatList
          data={todos}
          renderItem={({ item }) => (
            <Text>{item.text}</Text>
          )}
          keyExtractor={(item) => item._id} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  statusBar: {
    height: 125,
    width: '100%',
    backgroundColor: '#845A6D'
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
