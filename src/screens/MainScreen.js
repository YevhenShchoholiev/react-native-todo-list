import React from 'react'
import { StyleSheet, Text, View, FlatList } from 'react-native'
import { Todo } from '../components/Todo'
import { AddTodo } from '../components/AddTodo'

export const MainScreen = ({ addTodo, todos, removeTodo }) => {
    return (
        <View>
            <AddTodo onSubmit={addTodo} />

            <FlatList
                keyExtractor={item => item.id.toString()}
                data={todos}
                renderItem={({ item }) => <Todo todo={item} onRemove={removeTodo} />}
            />
        </View>
    )
}

const styles = StyleSheet.create({})
