import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Pantalla3 = () => {

    const counter = useSelector(state => state.counter.value)

    return (
        <View style={styles.container}>
            <Text>Estamos viendo el estado de redux que es: {counter}</Text>
        </View>
    )
}

export default Pantalla3

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
})