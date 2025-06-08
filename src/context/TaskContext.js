import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import uuid from 'react-native-uuid';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    loadTasks();
  }, []);

  const loadTasks = async () => {
    const json = await AsyncStorage.getItem('@tasks');
    if (json) setTasks(JSON.parse(json));
  };

  const saveTasks = async (tasksToSave) => {
    setTasks(tasksToSave);
    await AsyncStorage.setItem('@tasks', JSON.stringify(tasksToSave));
  };

  const addTask = (title) => {
    const newTask = { id: uuid.v4(), title, completed: false };
    const updated = [...tasks, newTask];
    saveTasks(updated);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask }}>
      {children}
    </TaskContext.Provider>
  );
};
