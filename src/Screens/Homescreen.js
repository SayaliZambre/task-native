import React, { useContext } from 'react';
import { View, Text, FlatList, Button } from 'react-native';
import { TaskContext } from '../context/TaskContext';
import TaskCard from '../components/TaskCard';

export default function HomeScreen({ navigation }) {
  const { tasks } = useContext(TaskContext);

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <Button title="Add Task" onPress={() => navigation.navigate('Add Task')} />
      <FlatList
        data={tasks}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <TaskCard task={item} />}
      />
    </View>
  );
}
