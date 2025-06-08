import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function TaskCard({ task }) {
  return (
    <View style={styles.card}>
      <Text>{task.title}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#eee',
    borderRadius: 8,
  },
});
