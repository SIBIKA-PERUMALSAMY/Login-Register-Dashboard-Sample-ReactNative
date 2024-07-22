import { StyleSheet, View } from 'react-native';
import MyReg from './Pages/RegisterPage';
import MyLog from './Pages/LoginPage';
import MyDashboard from './Pages/DashboardPage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Login'>
        <Stack.Screen name='Login'component={MyLog}/>
        <Stack.Screen name='Register'component={MyReg}/>
        <Stack.Screen name='Dashboard'component={MyDashboard}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
  },
});

