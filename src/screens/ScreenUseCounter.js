import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from '../features/slices/counter/counterSlice'

const ScreenUseCounter = ({navigation}) => {

    const [input, setInput] = useState("")
    const counter = useSelector( state=> state.counter.value)

    const dispatch = useDispatch()

    // const initialState = 0

    // const [counter, setCounter] = useState(initialState)

    const incrementF = () => {
        // setCounter(prev => prev += 1)
        dispatch(increment())
    }
    const decrementF = () => {
        // setCounter(prev => prev -= 1)
        dispatch(decrement())
    }
    const incrementByAmountF = (amount) => {
        // setCounter(prev => prev += Number(amount))
        dispatch(incrementByAmount(Number(amount)))
        setInput("")
    }


    return (
        <>
            <View style={styles.container}>
                <TouchableOpacity style={styles.btn} onPress={decrementF}>
                    <Text>-</Text>
                </TouchableOpacity>
                <View style={styles.containerTxt}>
                    <Text>{counter}</Text>
                </View>
                <TouchableOpacity style={styles.btn} onPress={incrementF}>
                    <Text>+</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.container}>
                <TextInput
                    style={styles.input}
                    placeholder='poner cantidad'
                    onChangeText={setInput}
                    value={input}
                />
                <TouchableOpacity style={styles.btnAceptar} onPress={() => incrementByAmountF(input)}>
                    <Text>Aceptar</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.center}>
                <TouchableOpacity style={styles.btnAceptar} onPress={()=> navigation.navigate("Pantalla2")}>
                    <Text>Ir Pantalla 2</Text>
                </TouchableOpacity>
            </View>
        </>
    )
}

export default ScreenUseCounter

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        flexDirection: 'row',
        marginTop: 20,
    },
    btn: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "13%",
        height: 40,
    },
    containerTxt: {
        width: "70%",
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
    },
    btnAceptar: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "27%",
        height: 40,
    },
    input: {
        borderWidth: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: "70%",
        height: 40,
        paddingLeft: 10,
    },
    center: {
        width: "100%",
        alignItems: 'center',
        marginTop: 70,
    }
})