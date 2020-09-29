import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { Icon } from 'react-native-elements'

export default function AddTodo ({addNewTodo}) {
  const [newTodo, setNewTodo] = useState('');
  
  const changeTextHandler = (val) => {
    setNewTodo(val)
  }

  return (
    <View style={styles.addView}>
      <TextInput style={styles.input}
        placeholder='Add Todo...'
        onChangeText={changeTextHandler}
      />
      <Icon
        style={styles.addButton}
        reverse
        name='add'
        color='#845A6D'
        onPress={() => addNewTodo(newTodo)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  addView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 10,
    paddingLeft: 8,
    width: '90%',
    
  },
  input: {
    flex: 2,
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical:6,
    borderBottomColor: '#B0DAF1',
    borderBottomWidth: 1,
    fontSize: 18,
    color: '#fff',
  },
  addButton: {
    flex: 1,
  },
})