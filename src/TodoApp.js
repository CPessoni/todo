import React from 'react';
import { View, Text, StyleSheet } from 'react-native'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'



export default class TodoApp extends React.Component {
    render() {
        return (
            <View style={ styles.container }>
                <TodoForm />
                <TodoList />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 25
    }
})