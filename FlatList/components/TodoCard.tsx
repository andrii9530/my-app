import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Todo  } from '../models/todo';


type Props  = {
  item: Todo
}
const TodoCard = ({ item }: Props) => {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>
          {item.completed ? 'Done' : 'Pending'} — {item.todo}
        </Text>
      </View>
    );
};

export default TodoCard

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f0f0f0',
      margin: 8,
      padding: 12,
      borderRadius: 8,
    },
    text: {
      fontSize: 16,
    },
});