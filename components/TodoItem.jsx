import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'; 

export default function TodoItem ({item, pressHandler}) {
  
  return (
    <TouchableOpacity onPress={() => pressHandler(item._id)}>
      <View style={styles.item}>
        <MaterialIcons name="delete" size={24} color="black" />
        <Text style={styles.text}>{item.text}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  item: {
    flex: 1,
    flexDirection: 'row',
    padding: 16,
    marginTop: 16,
    borderColor: '#3E1929',
    borderWidth: 1,
    borderStyle: 'dashed',
    borderRadius: 10,
    justifyContent: 'flex-start'
  },
  text: {
    paddingLeft: 20,
    fontWeight: 'bold',
    fontSize: 18,
    color: '#fff',
  }
})