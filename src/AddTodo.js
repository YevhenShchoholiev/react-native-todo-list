import React, { useState } from 'react'
import { StyleSheet, TextInput, Button, View, Alert } from 'react-native'

export const AddTodo = ({ onSubmit }) => {

    const [value, setValue] = useState('')

    const pressHanlder = () => {
        if (value.trim()) {
            onSubmit(value)
            setValue('')
        } else {
            Alert.alert('Title todo cannot be empty')
        }
    }

    return (
        <View style={styles.block}>
            <TextInput
                style={styles.input}
                value={value}
                onChangeText={setValue}
                placeholder='Enter title todo...'
            />
            <Button title='Add' onPress={pressHanlder} />
        </View>
    )
}



const styles = StyleSheet.create({
    block: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    input: {
        width: "80%",
        borderStyle: 'solid',
        borderBottomWidth: 2,
        borderBottomColor: '#3949ab',
        padding: 10
    }
}) 