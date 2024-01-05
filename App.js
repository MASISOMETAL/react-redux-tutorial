import { StatusBar, SafeAreaView, StyleSheet } from 'react-native';
import StackNavigation from './src/navigation/StackNavigation';
import { Provider } from 'react-redux';
import { store } from './src/app/store';

const App = () => {
    return (
        <Provider store={store}>
            <SafeAreaView style={styles.container}>
                <StatusBar />
                <StackNavigation />
            </SafeAreaView>
        </Provider>
    );
}

export default App

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})
