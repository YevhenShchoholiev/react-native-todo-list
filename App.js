import React, { useState } from 'react';
import { StyleSheet, View, FlatList } from 'react-native';
import { Navbar } from './src/components/Navbar';
import { MainScreen } from './src/screens/MainScreen';
import { TodoScreen } from './src/screens/TodoScreen';


export default function App() {
  const [todoId, setTodoId] = useState('2')
  const [todos, setTodos] = useState([
    { id: '1', title: 'todo 1' },
    { id: '2', title: 'todo 2' },
  ])


  const addTodo = (title) => {
    setTodos(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title
      }])
  }

  const removeTodo = id => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }


  let content = (
    <MainScreen
      addTodo={addTodo}
      todos={todos}
      removeTodo={removeTodo}
      openTodo={setTodoId} />
  )

  if (todoId) {
    let selectedTodo = todos.find(todo => todo.id === todoId)
    content = <TodoScreen goBack={() => setTodoId(null)} todo={selectedTodo} />
  }
  return (
    <View >
      <Navbar title="Todo App" />
      <View style={styles.container}>

        {content}

      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 30,
    paddingVertical: 20
  },
});
