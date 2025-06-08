import React, { useState, useContext } from 'react';
import { View, TextInput, Button } from 'react-native';
import { TaskContext } from '../context/TaskContext';

export default function AddTaskScreen({ navigation }) {
  const [title, setTitle] = useState('');
  const { addTask } = useContext(TaskContext);

  return (
    <View style={{ padding: 20 }}>
      <TextInput placeholder="Task title" value={title} onChangeText={setTitle} />
      <Button
        title="Add"
        onPress={() => {
          addTask(title);
          navigation.goBack();
        }}
      />
    </View>
  );
}
