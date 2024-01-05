import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import ScreenUseCounter from '../screens/ScreenUseCounter';
import Pantalla2 from '../screens/Pantalla2';
import Pantalla3 from '../screens/Pantalla3';

const Stack = createNativeStackNavigator()

const StackNavigation = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name='Home' component={ScreenUseCounter} />
                <Stack.Screen name='Pantalla2' component={Pantalla2} />
                <Stack.Screen name='Pantalla3' component={Pantalla3} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default StackNavigation