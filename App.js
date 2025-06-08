import React from 'react';
import AppNavigator from './src/AppNavigator';
import { TaskProvider } from './src/context/TaskContext';

export default function App() {
  return (
    <TaskProvider>
      <AppNavigator />
    </TaskProvider>
  );
}
