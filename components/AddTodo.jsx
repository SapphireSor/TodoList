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
        reverse
        name='add'
        color='#517fa4'
        onPress={() => addNewTodo(newTodo)}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  addView: {
    paddingTop: 10,
    paddingHorizontal: 8,
    width: '90%',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
  },
  input: {
    width: '80%',
    marginBottom: 10,
    paddingHorizontal: 8,
    paddingVertical:6,
    borderBottomColor: '#ddd',
    borderBottomWidth: 1,
  },
})