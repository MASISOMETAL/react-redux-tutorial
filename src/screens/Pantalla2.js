import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { useSelector } from 'react-redux'

const Pantalla2 = ({ navigation }) => {

    const counter = useSelector(state => state.counter.value)

    return (
        <View style={styles.container}>
            <Text>El valor de mi estado es {counter}</Text>
            <TouchableOpacity style={styles.btnAceptar} onPress={() => navigation.navigate("Pantalla3")}>
                <Text>Ir Pantalla 3</Text>
            </TouchableOpacity>
        </View>
    )
}

export default Pantalla2

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    btnAceptar: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "27%",
        height: 40,
    },
})